import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';


const history = createHistory();

export const middleware = routerMiddleware(history);

const AppRouter = ({ children }) => {
  return (
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  );
};

export default AppRouter;
