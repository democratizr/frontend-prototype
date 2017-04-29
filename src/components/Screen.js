import React from 'react';


const Screen = props => {
  const { children, ...rest } = props;

  return (
    <main {...rest}>{children}</main>
  );
};

export default Screen;
