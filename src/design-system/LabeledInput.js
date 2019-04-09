import React from 'react';
import { camelCase } from 'lodash';
import Label from './Label';
import InputField from './InputField';

const LabeledInput = ({ label, labelProps, ...props }) => {
  const name = props.name || camelCase(label);
  return (
    <>
      <Label htmlFor={name} {...labelProps}>
        {label}
      </Label>
      <InputField name={name} {...props} />
    </>
  );
};

LabeledInput.displayName = 'LabeledInput';

export default LabeledInput;
