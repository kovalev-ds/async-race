import { request } from '../request';
import { API_URL, Endpoint } from '../settings';
import { Car } from '../../types/index';

export const fetchAll = (page: number, limit: number) => {
  return request<Car[]>(API_URL + Endpoint.garage, {
    params: { _limit: limit, _page: page },
  });
};

export const fetchOne = (id: Car['id']) => {
  return request<Car>(API_URL + Endpoint.garage + id);
};

export const createOne = (data: Omit<Car, 'id'>) => {
  return request<Car>(API_URL + Endpoint.garage, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data,
  });
};

export const deleteOne = (id: Car['id']) => {
  return request(API_URL + Endpoint.garage + id, {
    method: 'DELETE',
  });
};

export const updateOne = (id: Car['id'], data: Omit<Car, 'id'>) => {
  return request<Car>(API_URL + Endpoint.garage + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data,
  });
};
