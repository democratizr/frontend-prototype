import { StyleRoot } from 'radium';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Header';
import About from '../screens/About';
import Home from '../screens/Home';


const App = () => {
  return (
    <StyleRoot>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </StyleRoot>
  );
};

export default App;
