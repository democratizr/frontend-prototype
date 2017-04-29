import Radium from 'radium';
import React from 'react';

import { medium } from '../styles/config/breakpoints';
import colors from '../styles/config/colors';
import { rem } from '../styles/sizes';


const style = {
  Header: {
    ...colors.brandInverted,
    padding: rem(1)
  },
  Title: {
    fontSize: rem(1),
    fontWeight: 'normal',

    [medium]: {
      fontSize: rem(1.5)
    }
  }
};

const BaseHeader = () => {
  return (
    <div style={style.Header}>
      <h1 style={style.Title}>Welcome to React</h1>
    </div>
  );
};

const Header = Radium(BaseHeader);

export default Header;
