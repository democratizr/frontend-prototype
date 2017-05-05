import glamorous from 'glamorous';
import React from 'react';
import { connect } from 'react-redux';

import AppMenuButton from './AppMenuButton';
import HeaderBackButton from './HeaderBackButton';
import HeaderLocation from './HeaderLocation';
import Link from './Link';
import { medium } from '../styles/breakpoints';
import { percent, rem } from '../styles/sizes';


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
          <HeaderLocation />
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
