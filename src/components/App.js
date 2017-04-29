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
        <Home />
      </div>
    </Router>
  );
};

export default App;
