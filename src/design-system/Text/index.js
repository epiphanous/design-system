import system from '../utils/system';
import Box from '../Box';

const caseify = ({ lowercase, uppercase, capitalize }) => {
  if (lowercase) return 'lowercase';
  if (uppercase) return 'uppercase';
  if (capitalize) return 'capitalize';
  return null;
};

const Text = system(
  'Text',
  {
    extend: Box,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    truncate: false,
  },
  props => ({
    textTransform: props.textTransform || caseify(props),
    overflow: props.overflow || (props.truncate && 'hidden'),
    whiteSpace: (props.truncate || props.nowrap) && 'nowrap',
    textOverflow: props.textOverflow || (props.truncate && 'ellipsis'),
  }),
);

export default Text;
