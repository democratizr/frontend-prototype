export const actions = {
  SET_TITLE: 'SET_TITLE',
};

export type State = string;

export type Action = {
  type: keyof typeof actions,
  title: string
};

const defaultState: State = 'Democratizr';

export const reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case actions.SET_TITLE:
      return action.title;
    default:
      return state;
  }
};
