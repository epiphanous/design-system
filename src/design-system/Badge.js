import system from '../utils/System';
import Text from './Text';

const Badge = system('Badge', {
  extend: Text,
  letterSpacing: 'caps',
  borderRadius: 'circle',
  display: 'inline-block',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export default Badge;
