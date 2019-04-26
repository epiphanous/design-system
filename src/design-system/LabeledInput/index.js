import React from 'react';
import { camelCase } from 'lodash';
import targetedProps from '../../utils/targetedProps';
import Label from '../Label';
import InputField from '../InputField';

const LabeledInput = ({ label, children, ...props }) => {
  const labelProps = targetedProps(props, 'label');
  console.log({ labelProps });
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
