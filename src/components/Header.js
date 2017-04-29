import Radium from 'radium';
import React from 'react';

import Icon from './Icon';
import { medium } from '../styles/config/breakpoints';
import colors from '../styles/config/colors';
import typography from '../styles/config/typography';
import { percent, px, rem } from '../styles/sizes';


const styles = {
  Header: {
    display: 'flex',
    alignItems: 'center',
    padding: rem(1),
    ...colors.brandInverted
  },
  Logo: {
    marginRight: rem(1)
  },
  MyLocation: {
    display: 'flex',
    alignItems: 'center',
    padding: rem(1/2),
    borderRadius: px(4),
    boxShadow: `${px(0, 1, 1)} ${colors.headerFieldShadow}`,
    ...typography.bold,
    ...colors.field,
    cursor: 'default'
  },
  MyLocationIcon: {
    width: rem(1),
    height: rem(1),
    marginRight: rem(1/4)
  },
  MenuButton: {
    width: rem(1),
    height: rem(1),
    marginLeft: 'auto',
    cursor: 'pointer',

    [medium]: {
      width: rem(1.5),
      height: rem(1.5)
    }
  },
  MenuButtonIcon: {
    ...colors.headerIcon,
    width: percent(100),
    height: percent(100)
  }
};

const Logo = () => {
  return (
    <div style={styles.Logo}>Democratizr</div>
  );
};

const MyLocation = () => {
  return (
    <div style={styles.MyLocation}>
      <Icon name="location" style={styles.MyLocationIcon} />
      My Location
    </div>
  )
};

const MenuButton = Radium(() => {
  return (
    <div style={styles.MenuButton}>
      <Icon name="hamburger" style={styles.MenuButtonIcon} />
    </div>
  );
});

const Header = () => {
  return (
    <div style={styles.Header}>
      <Logo />
      <MyLocation />
      <MenuButton />
    </div>
  );
};

export default Header;
