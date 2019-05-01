import React from 'react';
import Text from '../Text';
import Flex from '../Flex';
import Icon from '../Icon';
import targetedProps from '../utils/targetedProps';

const vert = lp => lp === 'top' || lp === 'bottom';
const before = lp => lp === 'left' || lp === 'top';

const IconButton = ({
  name,
  size = 24,
  label,
  children,
  labelPosition = 'right',
  labelMargin = 1,
  hoverable = true,
  disabled = false,
  ...props
}) => {
  const iconProps = targetedProps(props, 'icon');
  const labelProps = targetedProps(props, 'label');
  return (
    <Flex
      {...props}
      disabled={disabled}
      hoverable={hoverable}
      flexDirection={vert(labelPosition) ? 'column' : 'row'}
      flexWrap="nowrap"
      style={{ whiteSpace: 'nowrap' }}
      alignItems="center"
    >
      <Icon
        name={name}
        size={size}
        order={before(labelPosition) ? 2 : 1}
        {...iconProps}
      />
      {(children || label) && (
        <Text
          bg="transparent"
          disabled={disabled}
          order={before(labelPosition) ? 1 : 2}
          ml={labelPosition === 'right' && labelMargin}
          mr={labelPosition === 'left' && labelMargin}
          mt={labelPosition === 'bottom' && labelMargin}
          mb={labelPosition === 'top' && labelMargin}
          textStyle="truncate"
          {...labelProps}
        >
          {children || label}
        </Text>
      )}
    </Flex>
  );
};

IconButton.displayName = 'IconButton';

export default IconButton;
