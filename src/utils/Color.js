import { camelCase, find } from 'lodash';
import tinycolor from 'tinycolor2';

const hues = [
  'red',
  'orange',
  'yellow',
  'charteuse',
  'green',
  'spring green',
  'cyan',
  'azure',
  'blue',
  'violet',
  'magenta',
  'rose',
];

const neutralities = [['dark', 0.45], ['neutral', 0.8], ['light', 1.0]];

const hex2rgb = hex => [
  parseInt(hex.substr(1, 2), 16),
  parseInt(hex.substr(3, 2), 16),
  parseInt(hex.substr(5, 2), 16),
];

const rgb2hsl = rgb => {
  let [r, g, b] = rgb;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h;
  if (d === 0) h = 0;
  else if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else if (max === b) h = (r - g) / d + 4;
  const l = (min + max) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return [h / 6, s, l];
};

const hueLabel = hsl => {
  const [h, s] = hsl;
  const len = hues.length;
  const part = 360 / len;
  const deg = Math.round(360 * h + part / 2) % 360;
  const index = Math.floor(deg / part);
  return h === 0 && s === 0 ? 'gray' : hues[index];
};

const neutralityLabel = hsl => find(neutralities, n => hsl[2] <= n[1])[0];

// const rgb2hex = (rgb) =>
//   `#${rgb.map((c) => {
//     const h = c.toString(16);
//     return `${h.length % 2 ? '0' : ''}${h}`;
//   })}`;

const defaultShade = 0.2;
const defaultAlpha = 1;

const rgba = (rgb, alpha) => `rgba(${rgb.concat([alpha]).join(',')})`;

class Color {
  name;

  key;

  hex;

  _rgb;

  _hsl;

  hue;

  saturation;

  lightness;

  constructor(name, hex) {
    this.name = name;
    this.hex = hex.toLowerCase();
    this._rgb = hex2rgb(this.hex);
    this._hsl = rgb2hsl(this._rgb);
    this.hue = hueLabel(this._hsl);
    this.saturation = this._hsl[1];
    this.lightness = neutralityLabel(this._hsl);
    this.key = camelCase(name);
    this.fullKey = camelCase([this.lightness, this.hue, name].join(' '));
  }

  rgb(alpha = 0) {
    return rgba(this._rgb, alpha);
  }

  _shade(b) {
    return this._rgb.map(c => c * (1 + b));
  }

  darken(by = defaultShade, alpha = defaultAlpha) {
    return rgba(this._shade(-1 * Math.abs(by)), alpha);
  }

  lighten(by = defaultShade, alpha = defaultAlpha) {
    return rgba(this._shade(Math.abs(by)), alpha);
  }
}

export default Color;
