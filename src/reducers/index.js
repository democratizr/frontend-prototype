import { combineReducers } from 'redux';

import { reducer as menu } from './menu';


const reducer = combineReducers({
  menu
});

export default reducer;
