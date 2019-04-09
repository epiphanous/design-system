import system from '../utils/System';
import Box from './Box';

const Card = system('Card', {
  extend: Box,
  borderRadius: 'sm',
  boxShadow: 4,
  maxWidth: '20rem',
  className: 'surface',
});

export default Card;
