type Action = {
  type: string;
  payload: any;
};

export const configure = (slices) => {
  const state = {};
  const views = [];
  return {
    dispatch(action: Action) {
      Object.keys(slices).forEach((key) => {
        state[key] = slices[key](state[key], action);
      });
      views.forEach((view) => view(state));
    },
    connect(view) {
      views.push(view);
    },
  };
};
