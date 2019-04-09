import system from '../utils/System';
import Box from './Box';

const Relative = system(
  'Relative',
  {
    extend: Box,
    position: 'relative',
  },
  () => ({
    position: 'relative',
  }),
);

export default Relative;
