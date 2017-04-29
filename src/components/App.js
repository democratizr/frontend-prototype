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
  console.log('About', typeof About); // This logs function
  console.log('Home', typeof Home); // This logs function
  return (
    <Router>
      <div className="App">
        <Header />
        {/* This throws an invariant error, claiming Home is an object */}
        <Route exact path="/" component={Home} />
        {/* This throws an invariant error, claiming About is an object */}
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
