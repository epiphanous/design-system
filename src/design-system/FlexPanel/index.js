import system from '../utils/system';
import Flex from '../Flex';

const FlexPanel = system(
  'FlexPanel',
  {
    extend: Flex,
    flexDirection: 'column',
  },
  props => ({
    justifyContent: props.centered && 'center',
    alignItems: props.centered && 'center',
  }),
);

export default FlexPanel;
