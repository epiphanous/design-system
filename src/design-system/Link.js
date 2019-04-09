import React from 'react';
import { themeGet } from 'styled-system';
import { Link as RouterLink } from 'react-router-dom';
import system from '../utils/System';
import Text from './Text';

const hoverDecoration = props => {
  return {
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
      textDecoration: props.hoverunderline,
      color: props.hovercolor && themeGet(`colors.${props.hovercolor}`)(props),
    },
  };
};

const BaseLink = system(
  'BaseLink',
  {
    extend: RouterLink,
    color: 'primary',
    bg: 'transparent',
    hovercolor: 'misc.border',
    hoverunderline: 'underline',
    p: 0,
  },
  hoverDecoration,
  props => ({}),
);

const BaseHref = system(
  'BaseHref',
  {
    as: 'a',
    color: 'primary',
    bg: 'transparent',
    hovercolor: 'lightGrayBorder.2',
    hoverunderline: 'underline',
    p: 0,
  },
  hoverDecoration,
  props => ({}),
);

const Link = ({ to, children, href, ...props }) => {
  // If Link component has argument to for passing in link
  if (to)
    return (
      <BaseLink to={to} {...props}>
        {children}
      </BaseLink>
    );

  // It is intended to be an external link
  if (href)
    return (
      <BaseHref href={href} {...props}>
        {children}
      </BaseHref>
    );

  // Finally, if there is missing link for redirection
  return (
    <Text {...props} style={{ display: 'inline-block' }}>
      {children}
    </Text>
  );
};

Link.displayName = 'Link';

// add proptypes

export default Link;
