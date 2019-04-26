import system from '../../utils/System';
import Text from '../Text';

const Label = system('Label', {
  extend: Text,
  as: 'label',
  fontWeight: 'bold',
  inline: true,
});

export default Label;
