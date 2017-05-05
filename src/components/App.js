import glamorous, { ThemeProvider } from 'glamorous';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import AppMenu, { width as appMenuWidth } from './AppMenu';
import AppRouter, { middleware as historyMiddleware } from './AppRouter';
import Footer from './Footer';
import Header from './Header';
import reducer from '../reducers';
import About from '../screens/About';
import Home from '../screens/Home';
import NotFound from '../screens/NotFound';
import Issues from '../screens/Issues';
import Organizations from '../screens/Organizations';
import { percent, rem } from '../styles/sizes';
import theme from '../styles/theme';


const store = createStore(reducer, applyMiddleware(historyMiddleware));

const AppOuter = glamorous.div({
  height: percent(100)
});

const StyledAppInner = glamorous.div((props, theme) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: percent(100),
  transform: props.menu.isOpen && `translateX(-${appMenuWidth})`,
  transition: 'transform 0.15s',
}));

const BaseAppInner = props => {
  return (
    <AppRouter>
      <StyledAppInner {...props}>
        <AppHeader />
        <AppMenu />
        <AppBody>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/issues/" component={Issues} />
            <Route exact path="/organizations/" component={Organizations} />
            <Route component={NotFound} />
          </Switch>
        </AppBody>
        <AppFooter />
      </StyledAppInner>
    </AppRouter>
  );
};

const mapStateToProps = ({ menu }) => ({ menu });

const AppInner = connect(mapStateToProps)(BaseAppInner);

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

const App = () => {
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
