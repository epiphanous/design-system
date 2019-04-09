import React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { omit, get } from 'lodash';
import * as ssexports from 'styled-system';

/**
 * This file is based closely on @rebass/components...just reproducing it here
 * to simplify dependency management.
 */
const styles = omit(ssexports, [
  'defaultBreakpoints',
  'cloneFunction',
  'get',
  'themeGet',
  'is',
  'isObject',
  'num',
  'px',
  'createMediaQuery',
  'style',
  'compose',
  'mapProps',
  'variant',
]);

const styleKeys = Object.keys(styles).filter(
  key => typeof styles[key] === 'function',
);

const propNames = styleKeys.reduce((a, key) => {
  const names = Object.keys(styles[key].propTypes || {});
  return [...a, ...names];
}, []);

const extensionProps = ['is', 'as', 'tag', 'extend'];
const _blacklist = ['css', ...extensionProps, ...propNames];

// const tag = React.forwardRef(({ blacklist = [], ...props }, ref) => {
//   const { extend } = props;
//   const asTag = props.tag || props.is || props.as;
//   const Base = extend && asTag ? extend.withComponent(asTag) : asTag || extend;
//   const nextProps = omit(
//     props,
//     typeof Base === 'string' ? [..._blacklist, ...blacklist] : ['extend'],
//   );
//   console.log({ extend, asTag, Base, props, nextProps });
//   return React.createElement(Base, { ...nextProps, ref });
// });

const getPropTypes = styleFuncs =>
  styleFuncs
    .filter(fn => typeof fn === 'function' && typeof fn.propTypes === 'object')
    .reduce(
      (a, fn) => ({
        ...a,
        ...fn.propTypes,
      }),
      {},
    );

const css = props => props.css;

const system = (name, props = {}, ...keysOrStyles) => {
  const requestedStyles = keysOrStyles.map(
    keyOrStyle => styles[keyOrStyle] || keyOrStyle,
  );
  const propTypes = getPropTypes(requestedStyles);
  const baseProps = get(props, 'extend.defaultProps', {});
  const localProps = omit(props, extensionProps);
  const { extend } = props;
  const asTag = props.as || props.tag || props.is;
  const Base = extend || asTag || 'div';
  if (extend && asTag) {
    localProps.as = asTag;
  }
  const comp = styled(Base)(...requestedStyles, css);
  comp.defaultProps = { ...baseProps, ...localProps };
  comp.propTypes = propTypes;
  comp.systemComponent = true;
  comp.displayName = name;
  return comp;
};

export default system;
