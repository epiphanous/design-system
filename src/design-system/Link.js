import React from 'react';
import { themeGet } from 'styled-system';
import system from '../utils/System';
import Text from './Text';
import { Link as RouterLink } from 'react-router-dom';

const hoverDecoration = (props) => {
  return {
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    padding: themeGet(`space.${props.p}`)(props),
    color: themeGet(`colors.${props.color}`)(props),
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
    color: 'on.surface',
    hovercolor: 'lightGrayBorder',
    hoverunderline: 'underline',
    p: 0,
  },
  hoverDecoration,
  (props) => ({})
);

const BaseHref = system(
  'BaseHref',
  {
    as: 'a',
    color: 'on.surface',
    hovercolor: 'lightGrayBorder',
    hoverunderline: 'underline',
    p: 0,
  },
  hoverDecoration,
  (props) => ({})
);

const Link = ({ to, children, ...props }) => {
  // If Link component has argument to for passing in link
  if (to)
    return (
      <BaseLink to={to} {...props}>
        {children}
      </BaseLink>
    );

  // It is intended to be an external link
  if (props.href)
    return (
      <BaseHref href={props.href} {...props}>
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

export default Link;
