import React from 'react';
import { getWidth } from 'styled-system';
import cleanElement from 'clean-element';
import system from '../utils/System';
import icons from './icons';
import Flex from './Flex';

// Remove `space` props from the `svg` element prevents react warnings
const CleanSvg = cleanElement('svg');

const Base = props => {
  const { name, size, ...otherProps } = props;
  const icon = icons[name];
  if (!icon) return false;
  if (typeof icon === 'function') {
    return icon(props);
  }

  return (
    <Flex display="inline-flex" {...otherProps}>
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

const Icon = system(
  'Icon',
  {
    extend: Base,
    name: 'Check',
    size: 24,
  },
  props => ({
    minWidth: getWidth(props.size),
  }),
);

export default Icon;
