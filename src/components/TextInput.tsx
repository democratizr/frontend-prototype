import glamorous from 'glamorous';

import { Theme } from '../config';
import { rem } from '../styles/sizes';


const TextInput = glamorous.input((props, theme: Theme) => ({
  boxSizing: 'border-box',
  padding: rem(1/2),
  fontSize: rem(1),
  lineHeight: rem(1),
  ...theme.colors.field
}));

export default TextInput;
