import system from '../utils/system';
import Box from '../Box';

const Flex = system(
  'Flex',
  {
    extend: Box,
  },
  props => ({
    justifyContent: props.centered && 'center',
    alignItems: props.centered && 'center',
    display: props.inline ? 'inline-flex' : 'flex',
  }),
);

export default Flex;
