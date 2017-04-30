import Radium from 'radium';
import React from 'react';

import { medium } from '../styles/config/breakpoints';
import colors from '../styles/config/colors';
import { rem, px } from '../styles/sizes';


const styles = {
  ContentBox: {
    padding: rem(1),
    borderStyle: 'solid',
    borderWidth: px(1, 0),
    ...colors.contentBox,

    [medium]: {
      borderWidth: px(1)
    }
  }
};

const ContentBox = Radium(props => {
  const {
    children,
    ...rest
  } = props;

  return <div style={styles.ContentBox} {...rest}>{children}</div>
});

export default ContentBox;
