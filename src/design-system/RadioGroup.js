import React from 'react';
import { RadioButton } from './ToggleButton';
import Flex from './Flex';
import uniqid from '../utils/uniqid';

const RadioGroup = ({
  name,
  options,
  value = options && options[0].value,
  vertical = false,
  onChange,
  ...props
}) => {
  return (
    <Flex flexDirection={vertical && 'column'} {...props}>
      {options.map((option, i) => (
        <RadioButton
          key={uniqid()}
          name={name}
          checked={value === option.value}
          mr={!vertical && 2}
          onChange={newValue => {
            console.log({ [name]: newValue });
            if (onChange && newValue !== value) onChange(newValue);
          }}
          {...option}
        />
      ))}
    </Flex>
  );
};

export default RadioGroup;
