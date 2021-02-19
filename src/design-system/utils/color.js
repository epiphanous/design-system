import { themeGet } from '@styled-system/theme-get';
import tinycolor from 'tinycolor2';

export const hoverColor = color => {
  const base = tinycolor(color);
  return base.isLight() ? base.darken(6) : base.lighten(6);
};

export const greyOut = color => {
  const base = tinycolor(color);
  return base.lighten(12);
};

export const shades = color => {
  const base = tinycolor(color);
  const lighter = [52, 37, 26, 12, 6].map(f => base.lighten(f));
  const darker = [6, 12, 18, 24].map(f => base.darken(f));
  const alt = [[50, 30], [30, 30], [10, 15], [5, 5]].map(([f, s]) =>
    base.lighten(f).saturate(s),
  );
  return [...lighter, base, ...darker, ...alt];
};

export default props => {
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
    color,
    bg,
    borderColor,
    _bg, // if true, we want the background color
    _hover, // if true, we're in hover state
    _prop = 'bg', // the property to
  } = props;

  let key = null;
  let result = null;

  // asking for border?
  const _border = _prop === 'borderColor';

  // asking for on (fg/text) color?
  const _on = !_bg && !_border;
  let specified = false;

  if (_on && color) {
    specified = true;
    key = color;
  } else if (_bg && bg) {
    specified = true;
    key = bg;
  } else if (_border && borderColor) {
    specified = true;
    key = borderColor;
  } else if (active) key = 'active';
  else if (primary) key = 'primary';
  else if (secondary) key = 'secondary';
  else if (success) key = 'success';
  else if (warning) key = 'warning';
  else if (info) key = 'info';
  else if (error) key = 'error';
  else if (danger) key = 'danger';
  else if (_border) key = 'border';

  if (key) {
    if (_on && !specified) key = `on.${key}`;
    result = themeGet(`colors.${key}`)(props);
    if (result) {
      if (disabled) {
        const g = greyOut(result);
        if (g) result = g.toString();
      } else if (_hover) {
        const h = hoverColor(result);
        if (h) result = h.toString();
      }
    }
  }

  return result;
};
