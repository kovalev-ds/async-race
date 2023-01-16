import { configure } from './store';

const enum ActionType {
  init = 'cars/init',
  create = 'cars/create',
  delete = 'cars/delete',
  update = 'cars/update',
}

type Action = {
  type: ActionType;
  payload: any;
};

const cars = (state = [], action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.init:
      return [...state, ...payload];
    case ActionType.create:
      return [...state, payload];

    default:
      return state;
  }
};

export const { dispatch, connect } = configure({
  cars,
});
