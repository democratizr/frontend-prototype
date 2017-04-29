import React from 'react';


const Screen = props => {
  const { children, className, ...rest } = props;

  return (
    <main className={["screen", className]} {...rest}>{children}</main>
  );
};
