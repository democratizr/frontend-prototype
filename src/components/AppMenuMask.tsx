import glamorous from 'glamorous';
import * as React from 'react';
import { connect } from 'react-redux';

import { Theme } from '../config';
import { actions } from '../reducers/menu';

const StyledAppMenuMask = glamorous.div((props, theme: Theme) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  ...theme.colors.appMenuMask,
  zIndex: 2,
}));

type DispatchProps = {
  closeMenu: () => void
};

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    closeMenu: () => {
      dispatch({ type: actions.CLOSE_MENU });
    }
  };
};

const BaseAppMenuMask = (props: DispatchProps) => {
  const {
    closeMenu,
    ...rest
  } = props;

  return (
    <StyledAppMenuMask onClick={closeMenu} {...rest} />
  );
};

const AppMenuMask = connect(null, mapDispatchToProps)(BaseAppMenuMask);

export default AppMenuMask;
