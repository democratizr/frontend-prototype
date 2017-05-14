import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as location } from './location';
import { reducer as menu } from './menu';
import { reducer as title } from './title';


const reducer = combineReducers({
  location,
  menu,
  router,
  title
});

export default reducer;
