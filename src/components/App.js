import glamorous, { ThemeProvider } from 'glamorous';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import About from '../screens/About';
import Home from '../screens/Home';
import { percent, rem } from '../styles/sizes';
import theme from '../styles/theme';


const AppOuter = glamorous.div({
  height: percent(100)
});

const AppInner = glamorous.div({
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppOuter>
        <Router>
          <AppInner>
            <AppHeader />
            <AppBody>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </AppBody>
            <AppFooter />
          </AppInner>
        </Router>
      </AppOuter>
    </ThemeProvider>
  );
};

export default App;
