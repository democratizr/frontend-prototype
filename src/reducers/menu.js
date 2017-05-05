export const actions = {
  CLOSE_MENU: 'CLOSE_MENU',
  TOGGLE_MENU: 'TOGGLE_MENU'
};

const defaultState = { isOpen: false };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.CLOSE_MENU:
      return { isOpen: false };
    case actions.TOGGLE_MENU:
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};
