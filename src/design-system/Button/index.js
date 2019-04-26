import system from '../../utils/System';
import Box from '../Box';

const Button = system(
  'Button',
  {
    extend: Box,
    as: 'button',
    inline: true,
    py: 1,
    px: 2,
    borderRadius: 'sm',
    boxShadow: 4,
    minWidth: 100,
    border: 1,
    m: 1,
    hoverable: true,
  },
  () => ({
    appearance: 'none',
  }),
);

export default Button;
