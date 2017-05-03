import glamorous from 'glamorous';
import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Icon from './Icon';
import { actions } from '../reducers/menu';
import { medium } from '../styles/breakpoints';
import { percent, rem } from '../styles/sizes';


const MenuButton = glamorous(Button)({
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
});

const MenuButtonIcon = glamorous(Icon)({
  width: percent(100),
  height: percent(100)
});

const BaseAppMenuButton = ({ toggleMenu }) => {
  return (
    <MenuButton onClick={toggleMenu}>
      <MenuButtonIcon iconTheme="light" name="hamburger" />
    </MenuButton>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => {
      dispatch({ type: actions.TOGGLE_MENU });
    }
  };
};

const AppMenuButton = connect(null, mapDispatchToProps)(BaseAppMenuButton);

export default AppMenuButton;
