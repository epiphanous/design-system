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

const {
  bittersweet,
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
  primary: curiousBlue.toString(),
  secondary: quartz.toString(),
  info: malibu.toString(),
  success: mediumSeaGreen.toString(),
  active: creamCan.toString(),
  warning: creamCan.toString(),
  error: bittersweet.toString(),
  danger: bittersweet.toString(),
  background: solitude.toString(),
  surface: white.toString(),
  border: linkWater.toString(),

  // foregrounds
  on: {
    primary: white.toString(),
    secondary: nightRider.toString(),
    info: white.toString(),
    success: white.toString(),
    active: nightRider.toString(),
    warning: nightRider.toString(),
    error: white.toString(),
    danger: white.toString(),
    background: nightRider.toString(),
    surface: nightRider.toString(),
  },

  misc: {
    muted: 'gray',
  },
};

export default colors;
