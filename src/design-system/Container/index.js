import { themeGet } from '@styled-system/theme-get';
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
