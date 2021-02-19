import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import system from '../utils/system';
import Box from '../Box';

const StyledInputField = system(
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
    value: '',
  },
  props => ({
    borderRadius: props.plain && 0,
    boxShadow: props.plain && 'none',
    appearance: 'none',
    ':focus': {
      border: props.border && themeGet(`borders.${props.border}`)(props),
    },
    '::placeholder': {
      color: themeGet(`colors.misc.muted`)(props),
    },
    '::ms-clear': {
      display: 'none',
    },
  }),
);

const InputField = ({ onChange, ...props }) => (
  <StyledInputField
    onChange={onChange && (event => onChange(event.target.value))}
    {...props}
  />
);

export default InputField;
