import React from 'react';
import Select from 'react-select';
import Flex from './Flex';
import Text from './Text';
import Icon from './Icon';

const iconAndText = ({
  label,
  icon = 'dot',
  iconSize = 24,
  iconColor = 'inherit',
}) => (
  <Flex alignItems="center">
    <Icon name={icon} color={iconColor} size={iconSize} mr={2} />
    <Text ml>{label}</Text>
  </Flex>
);

const SelectWrapper = ({
  options,
  getOptionLabel = iconAndText,
  menuPlacement = 'auto',
  ...props
}) => (
  <Select
    options={options}
    getOptionLabel={getOptionLabel}
    menuPlacement={menuPlacement}
    {...props}
  />
);

export default SelectWrapper;
