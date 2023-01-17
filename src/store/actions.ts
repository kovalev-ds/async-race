import { Garage } from '../api/index';
import { Car } from '../types/Car';
import { dispatch } from './index';

export const create = (car: Omit<Car, 'id'>) => {
  Garage.createOne(car).then((data) => {
    dispatch({ type: 'cars/create', payload: data.data });
  });
};

export const update = (id: Car['id'], data: Omit<Car, 'id'>) => {
  Garage.updateOne(id, data).then((data) => {
    dispatch({ type: 'cars/update', payload: data.data });
  });
};

export const init = () => {
  Garage.fetchAll(1, 7).then(({ data }) => {
    dispatch({ type: 'cars/init', payload: data });
  });
};
