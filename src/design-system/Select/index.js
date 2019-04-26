import React from 'react';
import Select from 'react-select';
import Flex from '../Flex';
import Icon from '../Icon';
import Text from '../Text';

const iconAndText = ({
  label,
  icon = 'dot',
  iconSize = 24,
  iconColor = 'inherit',
}) => (
  <Flex alignItems="center" color="on.background" bg="transparent">
    <Icon name={icon} color={iconColor} size={iconSize} mr={2} />
    <Text ml>{label}</Text>
  </Flex>
);

const SelectWrapper = ({
  options,
  getOptionLabel = iconAndText,
  menuPlacement = 'auto',
  onChange,
  value,
  ...props
}) => (
  <Select
    options={options}
    getOptionLabel={getOptionLabel}
    menuPlacement={menuPlacement}
    value={options.find(option => option.value === value)}
    onChange={onChange && (option => onChange(option.value))}
    {...props}
  />
);

export default SelectWrapper;
