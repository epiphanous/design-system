import system from '../utils/System';
import Box from './Box';

const Flex = system(
  'Flex',
  {
    extend: Box,
    display: 'flex',
  },
  (props) => ({
    justifyContent: props.centered && 'center',
    alignItems: props.centered && 'center',
  })
);

export default Flex;
