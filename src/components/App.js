import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header';
import About from '../screens/About';
import Home from '../screens/Home';

import './App.css';


const App = () => {
  console.log('About', typeof About);
  console.log('Home', typeof Home);
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
