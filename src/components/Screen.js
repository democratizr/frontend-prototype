import Radium from 'radium';
import React from 'react';

import { medium } from '../styles/config/breakpoints';
import colors from '../styles/config/colors';
import { em } from '../styles/sizes';


const styles = {
  Screen: {
    padding: 0,

    [medium]: {
      padding: em(0, 1)
    }
  },
  ContentScreen: {
    flex: 1,
    ...colors.contentScreen,

    [medium]: {
      padding: em(1)
    }
  }
}

const Screen = Radium(props => {
  const {
    children,
    style,
    ...rest
  } = props;

  const screenStyle = {
    ...styles.Screen,
    ...style
  };

  return (
    <main style={screenStyle} {...rest}>{children}</main>
  );
});

export default Screen;

export const ContentScreen = Radium(props => {
  const {
    children,
    style,
    ...rest
  } = props;

  const screenStyle = {
    ...styles.ContentScreen,
    ...style
  };

  return (
    <Screen style={screenStyle} {...rest}>{children}</Screen>
  );
});
