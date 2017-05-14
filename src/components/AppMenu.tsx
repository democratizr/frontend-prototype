import glamorous from 'glamorous';
import * as React from 'react';
import { connect } from 'react-redux';

import { MenuButton, MenuButtonIcon } from './AppMenuButton';
import AppMenuMask from './AppMenuMask';
import Link from './AppMenuLink';
import { HeaderOffset } from './Header';
import { Theme } from '../config';
import { actions, State } from '../reducers/menu';
import { percent, rem } from '../styles/sizes';


type DispatchProps = {
  closeMenu: () => void
};

type Props = {
  menu: State
};

const BaseCloseButton = ({ closeMenu }: DispatchProps) => {
  return (
    <HeaderOffset>
      <MenuButton onClick={closeMenu}>
        <MenuButtonIcon iconTheme="light" name="x" />
      </MenuButton>
    </HeaderOffset>
  );
};

const CloseButton = connect(null, dispatch => ({
  closeMenu: () => {
    dispatch({ type: actions.CLOSE_MENU });
  }
}))(BaseCloseButton);

const List = glamorous.ul((props, theme: Theme) => ({
  ...theme.common.resetList,
  padding: rem(0, 2, 2),
}));

const Item = glamorous.li((props, theme: Theme) => ({
  ...theme.common.resetList,
  margin: rem(0, 0, 1)
}));

const width = rem(16);

const StyledAppMenu = glamorous.nav((props: Props, theme: Theme) => ({
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: percent(100),
  width: width,
  height: percent(100),
  boxShadow: props.menu.isOpen ? `${rem(0, 0, 1)} ${theme.colors.appMenuShadow}` : '',
  overflow: 'auto',
  ...theme.colors.appMenu,
  transform: props.menu.isOpen ? `translateX(-${width})` : '',
  transition: 'transform 0.15s, box-shadow 0.15s',
  zIndex: 3
}));

const BaseAppMenu = (props: Props) => {
  const { menu } = props;

  return (
    <div>
      {menu.isOpen && <AppMenuMask />}
      <StyledAppMenu {...props}>
        <CloseButton />
        <List>
          <Item><Link to="/">Home</Link></Item>
          <Item><Link to="/organizations/">Organizations</Link></Item>
          <Item><Link to="/issues/">Issues</Link></Item>
          <Item><Link to="/about/">About Democratizr</Link></Item>
        </List>
      </StyledAppMenu>
    </div>
  );
};

const mapStateToProps = ({ menu }): Props => ({ menu });

const AppMenu = connect(mapStateToProps)(BaseAppMenu);

export default AppMenu;
