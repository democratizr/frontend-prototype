import Radium from 'radium';
import React from 'react';

import Icon from './Icon';
import Link from './Link';
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
  HeaderLink: {
    ...colors.headerText,

    ':hover': {
      textDecoration: 'none'
    },
    ':visited': {
      ...colors.headerText
    }
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
    boxSizing: 'border-box',
    width: rem(1),
    height: rem(1),
    margin: '0 0 0 auto',
    border: 0,
    padding: 0,
    background: 'transparent',
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

const Logo = Radium(() => {
  return (
    <div style={styles.Logo}>
      <Link to="/" style={styles.HeaderLink}>Democratizr</Link>
    </div>
  );
});

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
    <button style={styles.MenuButton}>
      <Icon name="hamburger" style={styles.MenuButtonIcon} />
    </button>
  );
});

const Header = props => {
  const style = {
    ...styles.Header,
    ...props.style
  };

  return (
    <header style={style}>
      <Logo />
      <MyLocation />
      <MenuButton />
    </header>
  );
};

export default Header;
