import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as menu } from './menu';


const reducer = combineReducers({
  menu,
  router
});

export default reducer;
