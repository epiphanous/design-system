import { themeGet } from 'styled-system';
import system from '../utils/System';
import Box from './Box';

const InputField = system(
  'InputField',
  {
    extend: Box,
    as: 'input',
    type: 'text',
    boxShadow: 2,
    borderRadius: 2,
    bg: 'surface',
    flex: 1,
    border: 0,
    p: 2,
  },
  props => ({
    borderRadius: props.plain && 0,
    boxShadow: props.plain && 'none',
    appearance: 'none',
    outline: 'none',
    ':focus': {
      outline: 0,
      border: props.border && themeGet(`borders.${props.border}`)(props),
    },
    '::placeholder': {
      color: themeGet(`colors.misc.placeholder`)(props),
    },
    '::ms-clear': {
      display: 'none',
    },
  }),
);

export default InputField;
