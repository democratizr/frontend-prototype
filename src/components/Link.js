import Radium from 'radium';
import React from 'react';
import { Link as BaseRouterLink } from 'react-router-dom';

import colors from '../styles/config/colors';


const styles = {
  Link: {
    ...colors.navigation,
    fontWeight: 'bold',
    textDecoration: 'none',

    ':visited': colors.navigation,

    ':hover': {
      textDecoration: 'underline'
    }
  }
};

const RouterLink = Radium(BaseRouterLink);

const BaseLink = props => {
  const {
    children,
    style,
    ...rest
  } = props;

  return (
    <RouterLink style={[styles.Link, style]} {...rest}><span>{children}</span></RouterLink>
  );
};

const Link = Radium(BaseLink);

export default Link;
