import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import system from '../../utils/System';
import Text from '../Text';

const StyledHref = system('StyledHref', {
  extend: Text,
  as: 'a',
  inline: true,
  hoverable: true,
});

const StyledLink = system('StyledLink', {
  extend: StyledHref,
  as: RouterLink,
});

const Link = ({ to, href, children, ...props }) => {
  // If Link component has argument to for passing in link
  if (to)
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );

  // It is intended to be an external link
  if (href)
    return (
      <StyledHref href={href} {...props}>
        {children}
      </StyledHref>
    );

  // Finally, if there is missing link for redirection
  return (
    <Text inline hoverable {...props}>
      {children}
    </Text>
  );
};

Link.displayName = 'Link';

export default Link;
