import glamorous from 'glamorous';

import { rem } from '../styles/sizes';


const TextInput = glamorous.input((props, theme) => ({
  boxSizing: 'border-box',
  padding: rem(1/2),
  fontSize: rem(1),
  lineHeight: rem(1),
  ...theme.colors.field
}));

export default TextInput;
