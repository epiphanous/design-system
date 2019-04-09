import React from 'react';
import { PropTypes } from 'prop-types';
import system from '../utils/System';
import Box from './Box';
import Flex from './Flex';
import Icon from './Icon';
import hoverColors from '../utils/hoverColors';

const vert = lp => lp === 'top' || lp === 'bottom';
const before = lp => lp === 'left' || lp === 'top';

const HoverFlex = system(
  'HoverFlex',
  {
    extend: Flex,
    labelPosition: 'right',
    disabled: false,
  },
  props => ({
    color: hoverColors(props),
    backgroundColor: hoverColors({ ...props, _bg: true }),
    flexDirection: vert(props.labelPosition) ? 'column' : 'row',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    '& > svg': {
      flexOrder: before(props.labelPosition) ? 2 : 1,
    },
    '& > div': {
      flexOrder: before(props.labelPosition) ? 1 : 2,
    },
    '&:hover': {
      color: hoverColors({ ...props, _hover: true }),
      backgroundColor: hoverColors({ ...props, _hover: true, _bg: true }),
    },
  }),
);

const IconButton = ({
  name,
  size = 24,
  label,
  children,
  disabled,
  ...props
}) => (
  <HoverFlex className={`hoverable${disabled ? ' disabled' : ''}`} {...props}>
    <Icon name={name} size={size} />
    <Box className={disabled && 'disabled'}>{children || label}</Box>
  </HoverFlex>
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string,
  ...Flex.propTypes,
};

export default IconButton;
