import system from '../utils/System';
import Box from './Box';
import hoverColors from '../utils/hoverColors';

const Button = system(
  'Button',
  {
    extend: Box,
    as: 'button',
    display: 'inline-block',
    disabled: false,
    primary: false,
    py: 1,
    px: 2,
    borderRadius: 'sm',
    minWidth: 100,
    boxShadow: 3,
    border: 0,
    m: 1,
  },
  props => ({
    color: hoverColors(props),
    backgroundColor: hoverColors({ ...props, _bg: true }),
    appearance: 'none',
    display: 'inline-block',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      color: hoverColors({ ...props, _hover: true }),
      backgroundColor: hoverColors({ ...props, _bg: true, _hover: true }),
    },
  }),
);

export default Button;
