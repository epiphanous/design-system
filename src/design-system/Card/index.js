import system from '../utils/system';
import Box from '../Box';

const Card = system('Card', {
  extend: Box,
  borderRadius: 'sm',
  boxShadow: 4,
  className: 'surface',
  bg: 'surface',
});

export default Card;
