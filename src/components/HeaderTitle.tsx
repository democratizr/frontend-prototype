import glamorous from 'glamorous';
import * as React from 'react';
import { connect } from 'react-redux';

import { Theme } from '../config';
import { rem } from '../styles/sizes';


type Props = {
  title: string
};

const StyledTitle = glamorous.h1((props, theme: Theme) => ({
  margin: '0 0 0 auto',
  fontSize: rem(1.125),
  lineHeight: 1,
  ...theme.typography.normal
}));

const BaseTitle = ({ title }: Props) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const mapStateToProps = ({ title }: Props): Props => ({ title });

const HeaderTitle = connect(mapStateToProps)(BaseTitle);

export default HeaderTitle;
