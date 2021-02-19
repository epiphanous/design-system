import React from 'react';
import { withTheme } from '@emotion/react';
import Flex from '../Flex';


const Icon = ({ theme: { icons }, name, size = 24, ...props }) => {
  const icon = icons[name];
  if (!icon) return false;
  if (typeof icon === 'function') {
    return icon(props);
  }

  return (
    <Flex inline centered minWidth={size} {...props}>
      <icon size={size} {...props} />
    </Flex>
  );
};

export default withTheme(Icon);
