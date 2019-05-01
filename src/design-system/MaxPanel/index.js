import system from '../utils/system';
import FlexPanel from '../FlexPanel';

const MaxPanel = system('MaxPanel', {
  extend: FlexPanel,
  width: 1,
  flex: 1,
  height: '100vh',
});

export default MaxPanel;
