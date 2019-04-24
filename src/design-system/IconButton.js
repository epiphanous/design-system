import React from 'react';
import { PropTypes } from 'prop-types';
import { Text, Flex, Icon } from '.';

const vert = lp => lp === 'top' || lp === 'bottom';
const before = lp => lp === 'left' || lp === 'top';

const IconButton = ({
  name,
  size = 24,
  label,
  children,
  labelPosition = 'right',
  labelMargin = 1,
  hoverable = true,
  disabled = false,
  ...props
}) => (
  <Flex
    {...props}
    disabled={disabled}
    hoverable={hoverable}
    flexDirection={vert(labelPosition) ? 'column' : 'row'}
    flexWrap="nowrap"
    whiteSpace="nowrap"
    alignItems="center"
  >
    <Icon name={name} size={size} order={before(labelPosition) ? 2 : 1} />
    <Text
      bg="transparent"
      disabled={disabled}
      order={before(labelPosition) ? 1 : 2}
      ml={labelPosition === 'right' && labelMargin}
      mr={labelPosition === 'left' && labelMargin}
      mt={labelPosition === 'bottom' && labelMargin}
      mb={labelPosition === 'top' && labelMargin}
      textStyle="truncate"
    >
      {children || label}
    </Text>
  </Flex>
);

IconButton.displayName = 'IconButton';

export default IconButton;
