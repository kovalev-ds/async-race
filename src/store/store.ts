type Action = {
  type: string;
  payload: any;
};

type Slices = Record<string, (state, action: any) => any>;
type State = Record<keyof Slices, any>;
type View = (state: State) => void;

export const configure = (slices: Slices) => {
  const state: State = {};
  const views: View[] = [];

  return {
    dispatch(action: Action) {
      Object.keys(slices).forEach((key) => {
        state[key] = slices[key](state[key], action);
      });
      views.forEach((view) => view(state));
    },
    connect(view: View) {
      views.push(view);
    },
  };
};
