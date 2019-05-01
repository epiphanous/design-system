import system from '../utils/system';
import getColor from '../utils/color';

const Box = system(
  'Box',
  {},
  // core
  'color',
  'fontSize',
  'space',
  'width',
  // typography
  'fontFamily',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  // layout
  'display',
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'size',
  // flexbox
  'alignContent',
  'alignItems',
  'alignSelf',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'order',
  // grid layout
  'gridArea',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnGap',
  'gridGap',
  'gridRow',
  'gridRowGap',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  // borders
  'border',
  'borderBottom',
  'borderColor',
  'borderLeft',
  'borderRadius',
  'borderRight',
  'borderStyle',
  'borderTop',
  'borderWidth',
  // position
  'bottom',
  'left',
  'position',
  'right',
  'top',
  'zIndex',
  // misc
  'background',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'boxShadow',
  'opacity',
  'overflow',
  'textStyle',
  'colorStyle',
  'buttonStyle',
  props => ({
    display:
      props.inline &&
      (props.display || 'block').replace(/^(inline-)?/, 'inline-'),
    overflowY: (props.scrollable || props.vscrollable) && 'auto',
    overflowX: (props.scrollable || props.hscrollable) && 'auto',
    transform: props.transform,
    color: getColor(props),
    backgroundColor: getColor({ ...props, _bg: true }),
    borderColor: getColor({ ...props, _prop: 'borderColor', debug: true }),
    cursor: props.cursor || (props.hoverable && 'pointer'),
    '&:hover': props.hoverable && {
      color: getColor({ ...props, _hover: true }),
      backgroundColor: getColor({ ...props, _bg: true, _hover: true }),
      borderColor: getColor({
        ...props,
        _prop: 'borderColor',
        _hover: true,
      }),
    },
  }),
  props =>
    props.hidden && {
      position: 'absolute',
      left: '-10000px',
      top: 'auto',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
    },
);

export default Box;
