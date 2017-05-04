import glamorous from 'glamorous';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppMenuButton from './AppMenuButton';
import Button from './Button';
import HeaderBackButton from './HeaderBackButton';
import Icon from './Icon';
import Link from './Link';
import TextInput from './TextInput';
import { medium } from '../styles/breakpoints';
import { percent, px, rem } from '../styles/sizes';


const Logo = glamorous.div({
  display: 'none',
  marginRight: rem(1),
  fontSize: rem(1.25),

  [medium]: {
    display: 'block'
  }
});

const HeaderLink = glamorous(Link)((props, theme) => ({
  ...theme.typography.normal,
  ...theme.colors.headerText,

  ':hover': {
    textDecoration: 'none'
  },
  ':visited': {
    ...theme.colors.headerText
  }
}));

const HeaderLogo = () => {
  return (
    <Logo>
      <HeaderLink to="/">Democratizr</HeaderLink>
    </Logo>
  );
};

const fieldStyle = (props, theme) => ({
  padding: rem(1/2),
  border: 0,
  borderRadius: px(4),
  boxShadow: `${px(0, 1, 1)} ${theme.colors.headerFieldShadow}`,
  ...theme.colors.field,
});

const locationIconStyle = {
  width: rem(1),
  height: rem(1),
  marginRight: rem(1/4)
};

const MyLocation = glamorous.div(fieldStyle, (props, theme) => ({
  display: 'flex',
  alignItems: 'center',
  ...theme.typography.bold,
  cursor: 'default'
}));

const MyLocationIcon = glamorous(Icon)(locationIconStyle);

const MyLocationClearButton = glamorous(Button)({
  marginLeft: rem(1/2)
});

const HeaderMyLocation = props => {
  const {
    onClear,
    ...rest
  } = props;

  return (
    <MyLocation {...rest}>
      <MyLocationIcon iconTheme="dark" name="location" />
      My Location
      <MyLocationClearButton onClick={onClear}>⨉</MyLocationClearButton>
    </MyLocation>
  );
};

const LocationSubmitButton = glamorous(Button)({
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
});

const HeaderLocationSubmitButton = () => {
  return (
    <LocationSubmitButton>
      <Icon iconTheme="brand" name="circleChevronKnockout" />
    </LocationSubmitButton>
  )
};

const LocationFieldIcon = glamorous(Icon)(locationIconStyle, {
  position: 'absolute',
  top: percent(50),
  left: rem(1/2),
  marginTop: rem(-1/2),

  [medium]: {
    width: rem(1.5),
    height: rem(1.5),
    marginTop: rem(-3/4)
  }
});

const HeaderLocationFieldIcon = () => {
  return (
    <LocationFieldIcon name="location" />
  )
};

const LocationInput = glamorous(TextInput)(fieldStyle, {
  width: percent(100),
  height: rem(2),
  padding: rem(1/2, 2),

  [medium]: {
    height: rem(2.5),
    paddingLeft: rem(2.5),
  },
});

const LocationField = glamorous.div({
  position: 'relative',
  flex: 1,
  marginRight: rem(1)
});

const HeaderLocationField = () => {
  return (
    <LocationField>
      <HeaderLocationFieldIcon />
      <LocationInput autoFocus={true} />
      <HeaderLocationSubmitButton />
    </LocationField>
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
          <HeaderMyLocation onClear={() => { this.setState({ locationDetected: false }) }} />
        </div>
      );
    }

    return (
      <HeaderLocationField />
    );
  }
}

const headerOffsetStyle = {
  boxSizing: 'border-box',
  height: rem(3),

  [medium]: {
    height: rem(4.5)
  }
};

const HeaderOffset = glamorous.div(headerOffsetStyle);

const HeaderContent = glamorous.header(headerOffsetStyle, (props, theme) => ({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  top: 0,
  left: 0,
  width: percent(100),
  padding: rem(1),
  ...theme.colors.brandInverted,
  zIndex: 1
}));

const BaseHeader = props => {
  const {
    dispatch,
    router,
    ...rest
  } = props;

  const { location } = router;
  const { pathname } = location;
  const isHome = pathname === '/';

  return (
    <div {...rest}>
      {isHome ?
        <HeaderContent>
          <HeaderLogo />
          <Location />
          <AppMenuButton />
        </HeaderContent> :
        <HeaderContent>
          <HeaderBackButton />
          <AppMenuButton />
        </HeaderContent>}
      {/* This just exists to offset the space of the fixed header */}
      <HeaderOffset />
    </div>
  );
};

const mapStateToProps = ({ router }) => ({ router });

const Header = connect(mapStateToProps)(BaseHeader);

export default Header;
