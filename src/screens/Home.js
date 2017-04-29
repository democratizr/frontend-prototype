import React from 'react';
import { Link } from 'react-router-dom';

import Screen from '../components/Screen';


const Home = () => {
  return (
    <Screen>
      <p>Home</p>
      <Link to="/about">About</Link>
    </Screen>
  );
};

export default Home;
