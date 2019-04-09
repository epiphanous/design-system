import palette from './palette';
import shadows from './shadows';
import icons from './icons';

// some utility functions
const unit = (v, u) => `${v}${u}`;
const rem = v => unit(v, 'rem');
const round = value => Math.round(value * 1e3) / 1e3;

const baseFontSize = 22; // in px - 16px is standard for modern browsers
const htmlFontScale = round(100 * (baseFontSize / 16));
const fontFamily = "'Open Sans', sans-serif";
const headingsFamily = "'Fjalla One', sans-serif";
const fontSizes = [0.333, 0.5, 0.67, 1, 1.33, 1.67, 2.5, 3, 5].map(rem);
const fontWeights = [
  'normal', // 400
  'bold', // 700
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
].reduce((a, w) => {
  a[w] = w; // eslint-disable-line no-param-reassign
  return a;
}, {});

export const rem2px = s =>
  round(parseFloat(s.replace(/rem$/, '')) * baseFontSize);

// leading
const lineHeights = {
  none: null,
  tight: 1,
  solid: 1.15,
  title: 1.25,
  copy: 1.5,
  mega: 2.0,
};

// tracking
const letterSpacings = {
  tight: '-0.05em',
  normal: 'normal',
  tracked: '0.1em',
  mega: '0.25em',
};

// space scale for padding, margins
const space = [0, 0.25, 0.5, 1, 2, 4, 8, 16].map(rem);

// border radii and widths
const radii = {
  none: 0,
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  pill: '9999px',
  circle: '100%',
};
['xs', 'sm', 'md', 'lg'].forEach(x => {
  const r = radii[x];
  radii[`${x}l`] = `${r} 0 0 ${r}`;
  radii[`${x}r`] = `0 ${r} ${r} 0`;
});

const borderWidths = [0, 1 / 32, 1 / 16, 1 / 8, 1 / 4, 1 / 2, 1, 2, 4].map(rem);
const borders = borderWidths.map(w => `${w} solid`);

const breakpoints = [40, 52, 64, 80, 104, 128].map(rem);
const maxWidths = breakpoints;

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

const buttonStyles = {
  primary: {
    color: 'on.primary',
    bg: 'primary',
  },
};

const theme = {
  borders,
  borderWidths,
  breakpoints,
  buttonStyles,
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  headingsFamily,
  htmlFontScale,
  icons,
  letterSpacings,
  lineHeights,
  maxWidths,
  palette,
  radii,
  shadows,
  space,
};

export default theme;
