import glamorous from 'glamorous';
import { Link as RouterLink } from 'react-router-dom';


const Link = glamorous(RouterLink)((props, theme) => ({
  ...theme.colors.navigation,
  ...theme.typography.bold,
  textDecoration: 'none',

  ':visited': theme.colors.navigation,

  ':hover': {
    textDecoration: 'underline'
  }
}));

export default Link;
