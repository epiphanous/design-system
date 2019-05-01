import system from '../utils/system';
import Box from '../Box';

const Absolute = system(
  'Absolute',
  {
    extend: Box,
    position: 'absolute',
  },
  () => ({
    position: 'absolute',
  }),
);

export default Absolute;
