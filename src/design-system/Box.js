import system from '../utils/System';
import hoverColors from '../utils/hoverColors';

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
    display: props.inline && 'inline-block',
    overflowY: (props.scrollable || props.vscrollable) && 'auto',
    overflowX: (props.scrollable || props.hscrollable) && 'auto',
    color: hoverColors(props),
    backgroundColor: hoverColors({ ...props, _bg: true }),
    borderColor: hoverColors({ ...props, _prop: 'borderColor' }),
    cursor: props.hoverable && 'pointer',
    '&:hover': props.hoverable && {
      color: hoverColors({ ...props, _hover: true }),
      backgroundColor: hoverColors({ ...props, _bg: true, _hover: true }),
      borderColor: hoverColors({
        ...props,
        _prop: 'borderColor',
        _hover: true,
      }),
    },
  }),
);

export default Box;
