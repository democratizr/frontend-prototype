import React from 'react';


const icons = {
  hamburger: {
    viewBox: '0 0 24 24',
    d: 'M24,19 C24,18.453125 23.546875,18 23,18 L1,18 C0.453125,18 0,18.453125 0,19 L0,21 C0,21.546875 0.453125,22 1,22 L23,22 C23.546875,22 24,21.546875 24,21 L24,19 Z M24,11 C24,10.453125 23.546875,10 23,10 L1,10 C0.453125,10 0,10.453125 0,11 L0,13 C0,13.546875 0.453125,14 1,14 L23,14 C23.546875,14 24,13.546875 24,13 L24,11 Z M24,3 C24,2.453125 23.546875,2 23,2 L1,2 C0.453125,2 0,2.453125 0,3 L0,5 C0,5.546875 0.453125,6 1,6 L23,6 C23.546875,6 24,5.546875 24,5 L24,3 Z'
  }
};

const Icon = props => {
  const {
    name,
    style,
    ...restProps
  } = props;

  const {
    d,
    viewBox
  } = icons[name];

  const {
    fill,
    ...restStyle
  } = style;

  return (
    <svg style={restStyle} viewBox={viewBox} {...restProps}>
      <path d={d} style={{ fill }}></path>
    </svg>
  );
};

export default Icon;
