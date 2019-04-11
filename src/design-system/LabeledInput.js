import React from 'react';
import { camelCase } from 'lodash';
import Label from './Label';
import InputField from './InputField';

const LabeledInput = ({ label, labelProps, children, ...props }) => {
  const { name = camelCase(label) } = props;
  return (
    <>
      <Label htmlFor={name} {...labelProps}>
        {label}
      </Label>
      {children || <InputField name={name} {...props} />}
    </>
  );
};

LabeledInput.displayName = 'LabeledInput';

export default LabeledInput;
