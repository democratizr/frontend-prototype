import { StyleRoot } from 'radium';
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


const styles = {
  StyleRoot: {
    height: percent(100)
  },
  App: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: percent(100)
  },
  Header: {
    flexShrink: 0
  },
  Body: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  Footer: {
    marginTop: rem(1)
  }
};

const App = () => {
  return (
    <StyleRoot style={styles.StyleRoot}>
      <Router>
        <div style={styles.App}>
          <Header style={styles.Header} />
          <div style={styles.Body}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
          <Footer style={styles.Footer} />
        </div>
      </Router>
    </StyleRoot>
  );
};

export default App;
