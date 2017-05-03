import glamorous from 'glamorous';
import React from 'react';
import { connect } from 'react-redux';

import { percent, rem } from '../styles/sizes';


const StyledAppMenu = glamorous.nav((props, theme) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  height: percent(100),
  padding: rem(2),
  ...theme.colors.appMenu
}));

const BaseAppMenu = ({ menu }) => {
  if (menu.isOpen) {
    return (
      <StyledAppMenu>Welp</StyledAppMenu>
    );
  }

  return null;
}

const mapStateToProps = ({ menu }) => ({ menu });

const AppMenu = connect(mapStateToProps)(BaseAppMenu);

export default AppMenu;
