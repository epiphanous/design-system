import system from '../utils/System';
import Box from './Box';

const Section = system('Section', {
  extend: Box,
  as: 'section',
  mt: 3,
});

export default Section;
