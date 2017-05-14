export const actions = {
  CLOSE_MENU: 'CLOSE_MENU',
  TOGGLE_MENU: 'TOGGLE_MENU'
};

export type State = {
  isOpen: boolean
};

export type Action = {
  type: keyof typeof actions
};

const defaultState: State = { isOpen: false };

export const reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case actions.CLOSE_MENU:
      return { isOpen: false };
    case actions.TOGGLE_MENU:
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};
