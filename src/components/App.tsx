import glamorous, { ThemeProvider } from 'glamorous';
import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import AppMenu from './AppMenu';
import AppRouter, { middleware as historyMiddleware } from './AppRouter';
import Footer from './Footer';
import Header from './Header';
import Route from './Route';
import { Config, Route as RouteConfig } from '../config';
import reducer from '../reducers';
import { percent, rem } from '../styles/sizes';


const store = createStore(reducer, applyMiddleware(historyMiddleware));

const AppOuter = glamorous.div({
  height: percent(100)
});

const StyledAppInner = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: percent(100)
});

const AppHeader = glamorous(Header)({
  flexShrink: 0
});

const AppBody = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1
});

const AppFooter = glamorous(Footer)({
  marginTop: rem(1)
});

type AppInnerProps = {
  routes: RouteConfig[]
};

const AppInner = ({ routes }: AppInnerProps) => {
  return (
    <AppRouter>
      <StyledAppInner>
        <AppHeader />
        <AppMenu />
        <AppBody>
          <Switch>
            {routes.map(route => (
              // `route.path` is undefined for the NotFound route, but that's not a valid React key.
              <Route key={route.path || ''} {...route} />
            ))}
          </Switch>
        </AppBody>
        <AppFooter />
      </StyledAppInner>
    </AppRouter>
  );
};

type Props = {
  config: Config
};

const App = ({ config }: Props) => {
  const {
    routes,
    theme
  } = config;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppOuter>
          <AppInner routes={routes} />
        </AppOuter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
