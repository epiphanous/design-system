import Color from '../../utils/Color';

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
]
  .map(([name, hex]) => new Color(name, hex))
  .reduce((p, c) => ({ ...p, [c.key]: c }), {});

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
  suvaGray,
  tropicalBlue,
  white,
} = palette;

// colors
const colors = {
  // backgrounds
  background: solitude.hex,
  surface: white.hex,
  primary: curiousBlue.hex,
  secondary: quartz.hex,
  success: mediumSeaGreen.hex,
  warning: creamCan.hex,
  info: malibu.hex,
  error: bittersweet.hex,

  hover: {
    background: solitude.darken(),
    surface: white.darken(),
    primary: curiousBlue.darken(),
    secondary: quartz.darken(),
    success: mediumSeaGreen.darken(),
    warning: creamCan.lighten(),
    info: malibu.darken(),
    error: bittersweet.lighten(0.25),
  },

  // foregrounds
  on: {
    background: nightRider.hex,
    surface: nightRider.hex,
    primary: white.hex,
    secondary: black.hex,
    success: white.hex,
    warning: nightRider.hex,
    info: white.hex,
    error: white.hex,
  },

  misc: {
    border: linkWater.hex,
    disabled: linkWater.hex,
    primaryMuted: tropicalBlue.hex,
    on: {
      disabled: suvaGray.hex,
      primaryMuted: white.hex,
    },
    hover: {
      disabled: linkWater.hex,
      primaryMuted: tropicalBlue.darken(),
    },
  },
};

export default colors;
