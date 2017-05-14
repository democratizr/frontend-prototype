export const actions = {
  CANCEL_DETECTION: 'CANCEL_DETECTION',
  DETECTION_FAILED: 'DETECTION_FAILED'
};

export type State = {
  isDetected: boolean
};

export type Action = {
  type: keyof typeof actions
};

const defaultState: State = { isDetected: true };

export const reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case actions.CANCEL_DETECTION:
    case actions.DETECTION_FAILED:
      return { isDetected: false };
    default:
      return state;
  }
};
