import system from '../utils/System';
import Box from './Box';

const Button = system(
  'Button',
  {
    extend: Box,
    as: 'button',
    display: 'inline-block',
    py: 1,
    px: 2,
    borderRadius: 'sm',
    minWidth: 100,
    border: 1,
    m: 1,
    hoverable: true,
    bg: 'white',
  },
  (props) => ({
    appearance: 'none',
  })
);

export default Button;
