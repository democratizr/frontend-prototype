export const actions = {
  SET_MENU_IS_OPEN: 'SET_MENU_IS_OPEN',
  TOGGLE_MENU: 'TOGGLE_MENU'
};

const defaultState = { isOpen: false };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_MENU_IS_OPEN:
      return { isOpen: action.isOpen };
    case actions.TOGGLE_MENU:
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};
