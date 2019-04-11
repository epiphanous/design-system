import React from 'react';
import {
  ToggleButton,
  RadioGroup,
  CheckboxButton,
  InputField,
  Label,
  Button,
  Select,
  Relative,
} from '.';

const getInput = ({ input, type = 'text', ...props }) => {
  if (input) return input;
  switch (type) {
    case 'radio':
      return <RadioGroup {...props} />;
    case 'select':
      return <Select {...props} />;
    case 'checkbox':
      return <CheckboxButton {...props} />;
    case 'toggle':
      return <ToggleButton {...props} />;
    case 'button':
    case 'submit':
    case 'reset':
      return <Button type={type} {...props} />;
    default:
      return <InputField type={type} {...props} />;
  }
};

const FormField = props => {
  const input = getInput(props);
  const { label, floatLabel = false } = props;
  const lbl = <Label>{label}</Label>;
  return floatLabel ? (
    <Relative>
      {input}
      {lbl}
    </Relative>
  ) : (
    <>
      {lbl}
      {input}
    </>
  );
};

export default FormField;
