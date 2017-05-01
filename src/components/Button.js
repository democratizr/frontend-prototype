import Radium from 'radium';
import React from 'react';


const styles = {
  Button: {
    cursor: 'pointer'
  }
};

const Button = Radium(props => {
  const {
    children,
    style,
    ...rest
  } = props;

  const buttonStyle = {
    ...styles.Button,
    ...style
  };

  return (
    <button style={buttonStyle} {...rest}>{children}</button>
  );
});

export default Button;
