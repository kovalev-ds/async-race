import { Winner } from '../../types/Winner';
import { request } from '../request';
import { API_URL, SearchParamsBase, Endpoint } from '../settings';

export const fetchAll = (
  page = 1,
  limit = 10,
  order: SearchParamsBase['_order'] = 'ASC',
  sort: SearchParamsBase['_sort'] = 'wins'
) => {
  return request<Winner[]>(API_URL + Endpoint.winners, {
    params: { _page: page, _limit: limit, _order: order, _sort: sort },
  });
};

export const fetchOne = (id: Winner['id']) => {
  return request<Winner>(API_URL + Endpoint.winners + id);
};

export const createOne = (data: Winner) => {
  return request<Winner>(API_URL + Endpoint.winners, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};

export const deleteOne = (id: Winner['id']) => {
  return request(API_URL + Endpoint.winners + id, {
    method: 'DELETE',
  });
};

export const updateOne = (id: Winner['id'], data: Omit<Winner, 'id'>) => {
  return request<Winner>(API_URL + Endpoint.winners + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};
