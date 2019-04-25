import React from 'react';
import { Grid, IconButton, Label, InputField } from '.';
import targetedProps from '../utils/targetedProps';

const getTemplateColumns = ({ label, labelPlacement, icon, iconPlacement }) => {
  const template = ['1fr'];
  if (label) {
    if (labelPlacement === 'right') template.push('auto');
    else template.unshift('auto');
  }
  if (icon) {
    if (iconPlacement === 'left') template.unshift('auto');
    else template.push('auto');
  }
  return template.join(' ');
};

const AdornedInputField = ({
  icon,
  iconPlacement = 'right',
  label,
  labelPlacement = 'left',
  p = 2,
  borderRadius = 'sm',
  boxShadow = 3,
  onChange,
  value,
  type = 'text',
  ...props
}) => {
  const gridTemplateColumns = getTemplateColumns({
    icon,
    label,
    iconPlacement,
    labelPlacement,
  });
  const iconProps = targetedProps(props, 'icon');
  const inputProps = targetedProps(props, 'input');
  const labelProps = targetedProps(props, 'label');
  const wantsBr = ['xs', 'sm', 'md', 'lg'].includes(borderRadius);
  const pl = wantsBr
    ? x => (iconPlacement === x ? 'left.' : 'right.')
    : () => '';
  if (icon) {
    iconProps.borderRadius = `${pl('left')}${borderRadius}`;
  }
  if (label) {
    labelProps.borderRadius = `${pl('right')}${borderRadius}`;
  }
  if (icon && label) {
    inputProps.borderRadius = 'none';
  } else if (icon) {
    inputProps.borderRadius = `${pl('right')}${borderRadius}`;
  } else {
    inputProps.borderRadius = `${pl('right')}${borderRadius}`;
  }
  const renderLabel = () => {
    if (typeof label === 'string') {
      return (
        <Label
          p={p}
          display="flex"
          justifyContent="center"
          alignItems="center"
          {...labelProps}
        >
          {label}
        </Label>
      );
    }
    return label;
  };
  const renderIcon = () => {
    if (typeof icon === 'string') {
      return (
        <IconButton
          p={p}
          name={icon}
          size={32}
          display="flex"
          justifyContent="center"
          alignItems="center"
          {...iconProps}
        />
      );
    }
    return icon;
  };

  return (
    <Grid
      gridTemplateColumns={gridTemplateColumns}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      {...props}
    >
      {label && labelPlacement === 'left' && renderLabel()}
      {icon && iconPlacement === 'left' && renderIcon()}
      <InputField
        plain
        p={p}
        type={type}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      {icon && iconPlacement === 'right' && renderIcon()}
      {label && labelPlacement === 'right' && renderLabel()}
    </Grid>
  );
};

AdornedInputField.displayName = 'AdornedInputField';

export default AdornedInputField;
