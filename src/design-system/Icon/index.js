import React from 'react';
import cleanElement from 'clean-element';
import { withTheme } from 'emotion-theming';
import Flex from '../Flex';

// Remove `space` props from the `svg` element prevents react warnings
const CleanSvg = cleanElement('svg');

const Icon = ({ theme: { icons }, name, size = 24, ...props }) => {
  const icon = icons[name];
  if (!icon) return false;
  if (typeof icon === 'function') {
    return icon(props);
  }

  return (
    <Flex inline centered minWidth={size} {...props}>
      <CleanSvg
        viewBox={icon.viewBox}
        width={size}
        height={size}
        fill="currentcolor"
      >
        <path d={icon.body[0].props.d} />
      </CleanSvg>
    </Flex>
  );
};

export default withTheme(Icon);
