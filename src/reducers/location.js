export const actions = {
  CANCEL_DETECTION: 'CANCEL_DETECTION',
  DETECTION_FAILED: 'DETECTION_FAILED'
};

const defaultState = { isDetected: true };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.CANCEL_DETECTION:
    case actions.DETECTION_FAILED:
      return { isOpen: false };
    default:
      return state;
  }
};
