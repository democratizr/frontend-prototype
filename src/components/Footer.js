import glamorous from 'glamorous';
import React from 'react';

import { rem } from '../styles/sizes';
import Link from './Link';


const BaseFooter = glamorous.footer((props, theme) => ({
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  padding: rem(2, 1),
  ...theme.colors.footer
}));

const Footer = props => {
  return (
    <BaseFooter>
      <Link to="/about/">About</Link>
    </BaseFooter>
  );
};

export default Footer;
