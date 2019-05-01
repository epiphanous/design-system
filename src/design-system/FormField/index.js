import React from 'react';
import ToggleButton, { CheckboxButton } from '../ToggleButton';
import RadioGroup from '../RadioGroup';
import InputField from '../InputField';
import Label from '../Label';
import Button from '../Button';
import Select from '../Select';
import targetedProps from '../utils/targetedProps';
import uniqid from '../utils/uniqid';

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

const FormField = ({ label, ...props }) => {
  const id = uniqid();
  const labelProps = targetedProps(props, 'label');
  labelProps.key = `lbl-${id}`;
  // eslint-disable-next-line no-param-reassign
  props.key = `fld-${id}`;
  const { floating } = labelProps;
  const input = getInput(props);
  const lbl = <Label {...labelProps}>{label}</Label>;
  return (
    <>
      {floating || lbl}
      {input}
      {floating && lbl}
    </>
  );
};

export default FormField;
