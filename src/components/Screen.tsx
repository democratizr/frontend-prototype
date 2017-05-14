import glamorous from 'glamorous';

import { Theme } from '../config';
import { medium } from '../styles/breakpoints';
import { em } from '../styles/sizes';


const Screen = glamorous.main({
  padding: 0,

  [medium]: {
    padding: em(0, 1)
  }
});

export default Screen;

export const ContentScreen = glamorous(Screen)((props, theme: Theme) => ({
  flex: 1,
  ...theme.colors.contentScreen,

  [medium]: {
    padding: em(1)
  }
}));
