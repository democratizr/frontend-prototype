import Radium from 'radium';
import React from 'react';

import colors from '../styles/config/colors';
import { rem } from '../styles/sizes';


const styles = {
  TextInput: {
    boxSizing: 'border-box',
    padding: rem(1/2),
    fontSize: rem(1),
    lineHeight: rem(1),
    ...colors.field
  }
}

const TextInput = Radium(props => {
  const {
    style,
    ...rest
  } = props;

  const inputStyle = {
    ...styles.TextInput,
    ...style
  };

  return (
    <input style={inputStyle} {...rest} />
  )
});

export default TextInput;
