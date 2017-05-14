import glamorous from 'glamorous';
import * as React from 'react';
import { connect } from 'react-redux';
import { LinkProps } from 'react-router-dom';

import AppLink from './Link';
import { Theme } from '../config';
import { actions } from '../reducers/menu';


const StyledLink = glamorous(AppLink)((props, theme: Theme) => ({
  ...theme.colors.appMenuLink
}));

type DispatchProps = {
  closeMenu: () => void
};

type Props = DispatchProps & LinkProps;

const BaseLink = (props: Props) => {
  const {
    children,
    closeMenu,
    ...rest
  } = props;

  return (
    <StyledLink onClick={closeMenu} {...rest}>{children}</StyledLink>
  );
};

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    closeMenu: () => {
      dispatch({ type: actions.CLOSE_MENU });
    }
  };
};

const AppMenuLink = connect<void, DispatchProps, LinkProps>(null, mapDispatchToProps)(BaseLink);

export default AppMenuLink;
