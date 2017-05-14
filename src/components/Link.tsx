import glamorous from 'glamorous';
import { Link as RouterLink } from 'react-router-dom';

import { Theme } from '../config';


const Link = glamorous(RouterLink)((props, theme: Theme) => ({
  ...theme.colors.navigation,
  ...theme.typography.bold,
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline'
  }
}));

export default Link;
