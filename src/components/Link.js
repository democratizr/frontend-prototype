import glamorous from 'glamorous';
import { Link as RouterLink } from 'react-router-dom';


const Link = glamorous(RouterLink)((props, theme) => ({
  ...theme.colors.navigation,
  ...theme.typography.bold,
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline'
  }
}));

export default Link;
