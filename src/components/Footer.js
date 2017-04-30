import React from 'react';

import { rem } from '../styles/sizes';
import colors from '../styles/config/colors';
import Link from './Link';


const styles = {
  Footer: {
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 0,
    padding: rem(2, 1),
    ...colors.footer
  }
}

const Footer = props => {
  return (
    <footer style={styles.Footer}>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
