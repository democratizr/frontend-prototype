import glamorous from 'glamorous';
import React from 'react';
import { connect } from 'react-redux';

import AppLink from './Link';
import { actions } from '../reducers/menu';
import { percent, rem } from '../styles/sizes';


const List = glamorous.ul((props, theme) => theme.common.resetList);

const Item = glamorous.ul((props, theme) => ({
  ...theme.common.resetList,
  margin: rem(0, 0, 1)
}));

const StyledLink = glamorous(AppLink)((props, theme) => ({
  ...theme.colors.appMenuLink
}));

const BaseLink = props => {
  const {
    children,
    closeMenu,
    ...rest
  } = props;

  return (
    <StyledLink onClick={closeMenu} {...rest}>{children}</StyledLink>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    closeMenu: () => {
      dispatch({ type: actions.CLOSE_MENU });
    }
  };
};

const Link = connect(null, mapDispatchToProps)(BaseLink);

export const width = rem(16);

const StyledAppMenu = glamorous.nav((props, theme) => ({
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: percent(100),
  width: width,
  height: percent(100),
  padding: rem(2),
  boxShadow: `inset ${rem(2, 0, 2, -2)} ${theme.colors.appMenuShadow}`,
  overflow: 'auto',
  ...theme.colors.appMenu,
}));

const AppMenu = () => {
  return (
    <StyledAppMenu>
      <List>
        <Item><Link to="/">Home</Link></Item>
        <Item><Link to="/organizations/">Organizations</Link></Item>
        <Item><Link to="/issues/">Issues</Link></Item>
        <Item><Link to="/about/">About Democratizr</Link></Item>
      </List>
    </StyledAppMenu>
  );
}

export default AppMenu;
