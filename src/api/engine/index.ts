import { Car } from '../../types/Car';
import { request } from '../request';
import { API_URL, Endpoint } from '../settings';

type Race = {
  velocity: number;
  distance: number;
};

export const start = (id: Car['id']) => {
  return request<Race>(API_URL + Endpoint.engine, {
    method: 'PATCH',
    params: { id, status: 'started' },
  });
};

export const switchMode = (id: Car['id']) => {
  return request<{ success: boolean }>(API_URL + Endpoint.engine, { method: 'PATCH', params: { id, status: 'drive' } });
};
