import { themeGet } from 'styled-system';

const hoverColors = props => {
  const {
    disabled,
    primary,
    secondary,
    success,
    warning,
    info,
    error,
    _bg,
    _hover,
  } = props;
  let bgColor = props.bg || 'inherit';
  if (disabled) bgColor = 'disabled';
  else if (primary) bgColor = 'primary';
  else if (secondary) bgColor = 'secondary';
  else if (success) bgColor = 'success';
  else if (warning) bgColor = 'warning';
  else if (info) bgColor = 'info';
  else if (error) bgColor = 'error';
  const pfx = disabled ? 'misc.' : '';
  const hv = _hover && !disabled ? 'hover.' : '';
  const on = _bg ? '' : 'on.';
  return themeGet(`colors.${pfx}${hv}${on}${bgColor}`)(props);
};

export default hoverColors;
