import React from 'react';

import Screen from '../components/Screen';
import Link from '../components/Link';


const Home = () => {
  return (
    <Screen>
      <p>Home</p>
      <Link to="/about">About</Link>
    </Screen>
  );
};

export default Home;
