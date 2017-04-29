import Radium from 'radium';
import React from 'react';

import Icon from './Icon';
import { medium } from '../styles/config/breakpoints';
import colors from '../styles/config/colors';
import { px, rem } from '../styles/sizes';


const style = {
  Header: {
    display: 'flex',
    alignItems: 'center',
    padding: rem(1),
    ...colors.brandInverted
  },
  Title: {
    flex: 1,
    margin: 0,
    fontSize: rem(1),
    fontWeight: 'normal',
    lineHeight: 1,

    [medium]: {
      fontSize: rem(1.5)
    }
  },
  MenuButton: {
    ...colors.headerIcon,
    width: px(24),
    height: px(24)
  }
};

const BaseHeader = () => {
  return (
    <div style={style.Header}>
      <h1 style={style.Title}>Welcome to React</h1>
      <Icon name="hamburger" style={style.MenuButton} />
    </div>
  );
};

const Header = Radium(BaseHeader);

export default Header;
