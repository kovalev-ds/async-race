import { SearchParamsBase } from './settings';

type SearchParams = SearchParamsBase & {
  id: number;
  status: 'started' | 'stopped' | 'drive';
};

type RequestOptions = {
  method: keyof typeof RequestMethod;
  headers: Record<string, string>;
  params: Partial<SearchParams>;
  data: Record<string, unknown>;
};

type ResponseDTO<T> = {
  ok: boolean;
  data: T;
  total?: number;
};

const enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

export const request = async <T>(endpoint: string, options?: Partial<RequestOptions>): Promise<ResponseDTO<T>> => {
  console.log('Requesting data...');

  const url = new URL(endpoint);

  options?.params &&
    Object.entries(options.params).forEach(([key, value]) => url.searchParams.append(key, value.toString()));

  const request = new Request(url);

  options?.headers &&
    Object.entries(options.headers).forEach(([key, value]) => request.headers.append(key, value.toString()));

  try {
    const response = await fetch(request, { method: options?.method, body: JSON.stringify(options?.data) });

    const data = await response.json();

    const total = response.headers.get('X-Total-Count');

    return total === null
      ? {
          ok: true,
          data: data as T,
        }
      : {
          ok: true,
          data: data as T,
          total: parseInt(total),
        };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      data: null as T,
    };
  }
};
