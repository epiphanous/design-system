import React from 'react';
import { RadioButton } from './ToggleButton';
import Flex from './Flex';

const RadioGroup = ({ name, options, vertical = false }) => {
  return (
    <Flex flexDirection={vertical && 'column'}>
      {options.map(option => (
        <RadioButton
          name={name}
          label={option.label}
          value={option.value}
          mr={2}
        />
      ))}
    </Flex>
  );
};

export default RadioGroup;
