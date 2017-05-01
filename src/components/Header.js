import Radium from 'radium';
import React, { Component } from 'react';

import Button from './Button';
import Icon from './Icon';
import Link from './Link';
import TextInput from './TextInput';
import { medium } from '../styles/config/breakpoints';
import colors from '../styles/config/colors';
import typography from '../styles/config/typography';
import { percent, px, rem } from '../styles/sizes';


const styles = {
  Header: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    top: 0,
    left: 0,
    width: percent(100),
    height: rem(4),
    padding: rem(1),
    ...colors.brandInverted,
    zIndex: 1,

    [medium]: {
      height: rem(4.5)
    }
  },
  HeaderLink: {
    ...typography.normal,
    ...colors.headerText,

    ':hover': {
      textDecoration: 'none'
    },
    ':visited': {
      ...colors.headerText
    }
  },
  Logo: {
    display: 'none',
    marginRight: rem(1),
    fontSize: rem(1.25),

    [medium]: {
      display: 'block'
    }
  },
  Field: {
    padding: rem(1/2),
    border: 0,
    borderRadius: px(4),
    boxShadow: `${px(0, 1, 1)} ${colors.headerFieldShadow}`,
    ...colors.field,
  },
  LocationIcon: {
    width: rem(1),
    height: rem(1),
    marginRight: rem(1/4)
  },
  LocationField: {
    position: 'relative',
    flex: 1,
    marginRight: rem(1)
  },
  LocationFieldIcon: {
    position: 'absolute',
    top: percent(50),
    left: rem(1/2),
    marginTop: rem(-1/2),

    [medium]: {
      width: rem(1.5),
      height: rem(1.5),
      marginTop: rem(-3/4)
    }
  },
  LocationInput: {
    width: percent(100),
    height: rem(2),
    padding: rem(1/2, 2),

    [medium]: {
      height: rem(2.5)
    }
  },
  LocationSubmitButton: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'content-box',
    position: 'absolute',
    top: percent(50),
    right: rem(1/4),
    width: rem(1),
    height: rem(1),
    marginTop: rem(-3/4),
    border: 0,
    padding: rem(1/4),
    background: 'transparent',

    [medium]: {
      width: rem(1.5),
      height: rem(1.5),
      right: rem(1/2),
      padding: 0
    }
  },
  LocationSubmitIcon: {
    ...colors.headerButtonIcon
  },
  MyLocation: {
    display: 'flex',
    alignItems: 'center',
    ...typography.bold,
    cursor: 'default'
  },
  MyLocationClearButton: {
    marginLeft: rem(1/2)
  },
  MenuButton: {
    boxSizing: 'border-box',
    width: rem(1),
    height: rem(1),
    margin: '0 0 0 auto',
    border: 0,
    padding: 0,
    background: 'transparent',

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

const MyLocation = props => {
  const {
    onClear,
    ...rest
  } = props;

  const style = {
    ...styles.Field,
    ...styles.MyLocation
  };

  return (
    <div style={style} {...rest}>
      <Icon name="location" style={styles.LocationIcon} />
      My Location
      <Button onClick={onClear} style={styles.MyLocationClearButton}>⨉</Button>
    </div>
  )
};

const LocationSubmitButton = Radium(() => {
  return (
    <Button style={styles.LocationSubmitButton}>
      <Icon name="circleChevronKnockout" style={styles.LocationSubmitIcon} />
    </Button>
  )
});

const LocationFieldIcon = Radium(() => {
  const style = {
    ...styles.LocationIcon,
    ...styles.LocationFieldIcon
  };

  return (
    <Icon name="location" style={style} />
  )
});

const LocationInput = Radium(() => {
  const style = {
    ...styles.Field,
    ...styles.LocationInput
  };

  return (
    <TextInput style={style} autoFocus={true} />
  );
});

const LocationField = () => {
  return (
    <div style={styles.LocationField}>
      <LocationFieldIcon />
      <LocationInput />
      <LocationSubmitButton />
    </div>
  );
};

class Location extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      locationDetected: true
    };
  }

  render() {
    if (this.state.locationDetected) {
      return (
        <div>
          <MyLocation onClear={() => { this.setState({ locationDetected: false }) }} />
        </div>
      );
    }

    return (
      <LocationField />
    );
  }
}

const MenuButton = Radium(() => {
  return (
    <Button style={styles.MenuButton}>
      <Icon name="hamburger" style={styles.MenuButtonIcon} />
    </Button>
  );
});

const Header = Radium(props => {
  const style = {
    ...styles.Header,
    ...props.style
  };

  const fixedStyle = {
    ...style,
    position: 'fixed'
  };

  return (
    <div>
      <header style={fixedStyle}>
        <Logo />
        <Location />
        <MenuButton />
      </header>
      {/* This just exists to offset the space of the fixed header */}
      <div style={style} />
    </div>
  );
});

export default Header;
