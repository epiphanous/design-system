import tinycolor from 'tinycolor2';
import { camelCase } from 'lodash';

// https://www.color-blindness.com/color-name-hue/
export const palette = [
  ['Bittersweet', '#F66662'],
  ['Black', '#000000'],
  ['Chablis', '#FEF4F4'],
  ['Chathams Blue', '#2E5171'],
  ['Cosmic Latte', '#F5FCF9'],
  ['Cream Can', '#F1BE4B'],
  ['Curious Blue', '#3374C8'],
  ['Dark Goldenrod', '#C66D0B'],
  ['Dawn Pink', '#E9DCD1'],
  ['Desert', '#A46C3D'],
  ['Downy', '#67C6C3'],
  ['Eucalyptus', '#2C976B'],
  ['Lavender', '#F4F9FD'],
  ['Light Gray', '#C9C9C9'],
  ['Link Water', '#D1D8E0'],
  ['Malibu', '#5EA8E6'],
  ['Matisse', '#335177'],
  ['Medium Sea Green', '#38BD87'],
  ['Mortar', '#595959'],
  ['Night Rider', '#333333'],
  ['Old Lace', '#FEFAF2'],
  ['Prussian Blue', '#002855'],
  ['Quartz', '#CEDEF2'],
  ['Sea Buckthorn', '#EC9C58'],
  ['Sea Green', '#288860'],
  ['Solitude', '#F7F8F9'],
  ['Sunset', '#C4524E'],
  ['Suva Gray', '#898989'],
  ['Tropical Blue', '#BDD2ED'],
  ['White', '#FFFFFF'],
].reduce((p, [name, hex]) => ({ ...p, [camelCase(name)]: tinycolor(hex) }), {});

console.log({ palette });

const {
  bittersweet,
  black,
  creamCan,
  curiousBlue,
  linkWater,
  malibu,
  mediumSeaGreen,
  nightRider,
  quartz,
  solitude,
  white,
} = palette;

// colors
const colors = {
  // backgrounds
  background: solitude.toString(),
  surface: white.toString(),
  primary: curiousBlue.toString(),
  secondary: quartz.toString(),
  success: mediumSeaGreen.toString(),
  warning: creamCan.toString(),
  info: malibu.toString(),
  error: bittersweet.toString(),
  gray: linkWater.toString(),

  // foregrounds
  on: {
    background: nightRider.toString(),
    surface: nightRider.toString(),
    primary: white.toString(),
    secondary: black.toString(),
    success: white.toString(),
    warning: nightRider.toString(),
    info: white.toString(),
    error: white.toString(),
    gray: black.toString(),
  },

  misc: {},
};

export const shades = color => {
  const base = tinycolor(color);
  const lighter = [52, 37, 26, 12, 6].map(f => base.lighten(f));
  const darker = [6, 12, 18, 24].map(f => base.darken(f));
  const alt = [[50, 30], [30, 30], [10, 15], [5, 5]].map(([f, s]) =>
    base.lighten(f).saturate(s),
  );
  console.log({ base, lighter, darker, alt });
  return [...lighter, base, ...darker, ...alt];
};

export const hover = color => {
  const base = tinycolor(color);
  return base.isLight() ? base.darken(6) : base.lighten(6);
};

console.log({ reds: shades(curiousBlue).map(c => c.toString()) });
console.log({ hover: hover(curiousBlue) });

export default colors;
