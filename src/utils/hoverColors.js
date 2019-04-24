import { themeGet } from 'styled-system';

const hoverColors = (props) => {
  const {
    disabled,
    active,
    primary,
    secondary,
    success,
    warning,
    info,
    error,
    danger,
    _bg,
    _hover,
    _prop = 'bg',
    _border = _prop === 'borderColor',
  } = props;
  if (props.hasOwnProperty('color') && !disabled && !_bg && !_hover) {
    return themeGet(`colors.${props.color}`)(props);
  }
  let color = props[_prop] || (_hover ? 'background' : 'inherit');
  if (disabled) color = 'disabled';
  else if (active) color = 'active';
  else if (primary) color = 'primary';
  else if (secondary) color = 'secondary';
  else if (success) color = 'success';
  else if (warning) color = 'warning';
  else if (info) color = 'info';
  else if (error) color = 'error';
  else if (danger) color = 'danger';
  const hv = _hover && !disabled ? 'hover.' : '';
  const on = _bg || _border ? '' : 'on.';

  return themeGet(`colors.${hv}${on}${color}`)(props);
};

export default hoverColors;
