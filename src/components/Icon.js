import glamorous from 'glamorous';
import React from 'react';

import { percent, px } from '../styles/sizes';

const icons = {
  hamburger: {
    d: 'M24,19 C24,18.453125 23.546875,18 23,18 L1,18 C0.453125,18 0,18.453125 0,19 L0,21 C0,21.546875 0.453125,22 1,22 L23,22 C23.546875,22 24,21.546875 24,21 L24,19 Z M24,11 C24,10.453125 23.546875,10 23,10 L1,10 C0.453125,10 0,10.453125 0,11 L0,13 C0,13.546875 0.453125,14 1,14 L23,14 C23.546875,14 24,13.546875 24,13 L24,11 Z M24,3 C24,2.453125 23.546875,2 23,2 L1,2 C0.453125,2 0,2.453125 0,3 L0,5 C0,5.546875 0.453125,6 1,6 L23,6 C23.546875,6 24,5.546875 24,5 L24,3 Z'
  },
  location: {
    d: 'M14.9737511,8 C14.9737511,6.89583333 14.6165326,5.953125 13.9020957,5.171875 C13.1876588,4.390625 12.3255715,4 11.315834,4 C10.3060965,4 9.44400931,4.390625 8.7295724,5.171875 C8.01513548,5.953125 7.65791702,6.89583333 7.65791702,8 C7.65791702,9.10416667 8.01513548,10.046875 8.7295724,10.828125 C9.44400931,11.609375 10.3060965,12 11.315834,12 C12.3255715,12 13.1876588,11.609375 13.9020957,10.828125 C14.6165326,10.046875 14.9737511,9.10416667 14.9737511,8 Z M18.6316681,8 C18.6316681,9.13541667 18.474492,10.0677083 18.1601397,10.796875 L12.959039,22.890625 C12.8066257,23.234375 12.5803874,23.5052083 12.2803239,23.703125 C11.9802604,23.9010417 11.6587638,24 11.315834,24 C10.9729043,24 10.6514077,23.9010417 10.3513442,23.703125 C10.0512807,23.5052083 9.82980525,23.234375 9.68691787,22.890625 L4.47152837,10.796875 C4.15717612,10.0677083 4,9.13541667 4,8 C4,5.79166667 4.71443692,3.90625 6.14331075,2.34375 C7.57218459,0.78125 9.29635902,0 11.315834,0 C13.3353091,0 15.0594835,0.78125 16.4883573,2.34375 C17.9172312,3.90625 18.6316681,5.79166667 18.6316681,8 Z'
  },
  circleChevronKnockout: {
    d: 'M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M9.69230769,7.24061538 L13.1187692,12.4393846 L9.72184615,17.5790769 L11.5236923,18.8492308 L15.8363077,12.4393846 L11.5236923,6 L9.69230769,7.24061538 Z'
  }
};

const defaultViewBox = '0 0 24 24';

const Svg = glamorous.svg((props, theme) => ({
  ...theme.colors.icon,
  width: px(24),
  height: px(24),
  maxWidth: percent(100),
  maxHeight: percent(100)
}));

// The default of `glamorous.path` is to swallow the `d` attr. O_o
const SvgPath = props => {
  const {
    iconTheme,
    ...rest
  } = props;

  return (
    <path {...rest} />
  )
};

const Path = glamorous(SvgPath)((props, theme) => {
  const { iconTheme } = props;

  return theme.colors.iconTheme[iconTheme];
});

const Icon = props => {
  const {
    name,
    iconTheme = 'dark',
    ...rest
  } = props;

  const {
    d,
    viewBox = defaultViewBox
  } = icons[name];

  return (
    <Svg viewBox={viewBox} {...rest}>
      <Path d={d} iconTheme={iconTheme} />
    </Svg>
  );
};

export default Icon;
