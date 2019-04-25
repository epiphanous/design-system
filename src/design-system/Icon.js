import React from 'react';
import cleanElement from 'clean-element';
import system from '../utils/System';
import theme from './theme';
import { Flex } from '.';

const { icons } = theme;

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
    <Flex inline centered {...otherProps}>
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
    name: 'check',
    size: 24,
  },
  props => ({
    minWidth: props.size,
  }),
);

export default Icon;
