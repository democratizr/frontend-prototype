import glamorous, { ThemeProvider } from 'glamorous';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import AppMenu from './AppMenu';
import AppRouter, { middleware as historyMiddleware } from './AppRouter';
import Footer from './Footer';
import Header from './Header';
import { Config } from '../config';
import reducer from '../reducers';
import About from '../screens/About';
import Home from '../screens/Home';
import NotFound from '../screens/NotFound';
import Issues from '../screens/Issues';
import Organizations from '../screens/Organizations';
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

const AppInner = () => {
  return (
    <AppRouter>
      <StyledAppInner>
        <AppHeader />
        <AppMenu />
        <AppBody>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about/" component={About} />
            <Route exact={true} path="/issues/" component={Issues} />
            <Route exact={true} path="/organizations/" component={Organizations} />
            <Route component={NotFound} />
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
  const { theme } = config;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppOuter>
          <AppInner />
        </AppOuter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
