import glamorous from 'glamorous';
import * as React from 'react';

import Link from './Link';
import { Theme } from '../config';
import { rem } from '../styles/sizes';


const BaseFooter = glamorous.footer((props, theme: Theme) => ({
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  padding: rem(2, 1),
  ...theme.colors.footer
}));

const Footer = () => {
  return (
    <BaseFooter>
      <Link to="/about/">About</Link>
    </BaseFooter>
  );
};

export default Footer;
