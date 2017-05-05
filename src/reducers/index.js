import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as location } from './location';
import { reducer as menu } from './menu';


const reducer = combineReducers({
  location,
  menu,
  router
});

export default reducer;
