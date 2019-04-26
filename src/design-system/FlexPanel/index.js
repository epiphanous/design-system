import system from '../../utils/System';
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
