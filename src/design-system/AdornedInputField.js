import React from 'react';
import { PropTypes } from 'prop-types';
import InputField from './InputField';
import Flex from './Flex';
import IconButton from './IconButton';
import Label from './Label';
import system from '../utils/System';

const StyledAdornedInputField = system('StyledAdornedInputField', {
  extend: Flex,
  alignItems: 'center',
  boxShadow: 2,
});

const targetedProps = (props, prefix) => {
  const obj = {};
  const plen = prefix.length;
  const pfxPattern = new RegExp(`^${prefix}`);
  for (const key in props) {
    if (key.startsWith(prefix) && plen < key.length) {
      const newKey = key.replace(pfxPattern, '');
      obj[newKey.substring(0, 1).toLowerCase() + newKey.substring(1)] =
        props[key];
      delete props[key];
    }
  }
  return obj;
};

const AdornedInputField = ({
  icon,
  iconPlacement = 'right',
  label,
  labelPlacement = 'left',
  p = 2,
  borderRadius = 'sm',
  ...props
}) => {
  const iconProps = targetedProps(props, 'icon');
  const inputProps = targetedProps(props, 'input');
  const labelProps = targetedProps(props, 'label');
  const wantsBr = ['xs', 'sm', 'md', 'lg'].includes(borderRadius);
  if (icon) {
    const pl = wantsBr ? (iconPlacement === 'left' ? 'l' : 'r') : '';
    iconProps.borderRadius = `${borderRadius}${pl}`;
  }
  if (label) {
    const pl = wantsBr ? (labelPlacement === 'left' ? 'l' : 'r') : '';
    labelProps.borderRadius = `${borderRadius}${pl}`;
  }
  if (icon && label) {
    inputProps.borderRadius = 'none';
  } else if (icon) {
    const pl = wantsBr ? (iconPlacement === 'left' ? 'r' : 'l') : '';
    inputProps.borderRadius = `${borderRadius}${pl}`;
  } else {
    const pl = wantsBr ? (labelPlacement === 'left' ? 'r' : 'l') : '';
    inputProps.borderRadius = `${borderRadius}${pl}`;
  }
  return (
    <StyledAdornedInputField borderRadius={borderRadius} {...props}>
      {label &&
        (typeof label === 'string' ? (
          <Label p={p} {...labelProps}>
            {label}
          </Label>
        ) : (
          { label }
        ))}
      <InputField plain p={p} {...inputProps} />
      {icon &&
        (typeof icon === 'string' ? (
          <IconButton p={p} name={icon} size={32} {...iconProps} />
        ) : (
          { icon }
        ))}
    </StyledAdornedInputField>
  );
};

AdornedInputField.displayName = 'AdornedInputField';
AdornedInputField.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelPlacement: PropTypes.oneOf(['left', 'right']),
  ...StyledAdornedInputField.propTypes,
};

export default AdornedInputField;
