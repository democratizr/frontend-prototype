import glamorous from 'glamorous';

import { medium } from '../styles/breakpoints';
import { rem, px } from '../styles/sizes';


const ContentBox = glamorous.div((props, theme) => ({
  padding: rem(1),
  borderStyle: 'solid',
  borderWidth: px(1, 0),
  ...theme.colors.contentBox,

  [medium]: {
    borderWidth: px(1)
  }
}));

export default ContentBox;
