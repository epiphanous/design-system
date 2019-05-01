import { themeGet } from 'styled-system';
import system from '../utils/system';
import Box from '../Box';

const Container = system(
  'Container',
  {
    extend: Box,
    mx: 'auto',
  },
  props => themeGet('maxWidths')(props),
);

export default Container;
