import React from 'react';
import { Global, css } from '@emotion/core';
import 'normalize.css';

/**
 * This is the global style sheet...it should not get too full of stuff that could better
 * be done in components...but it can do some useful common things.
 */
const GlobalStyles = () => (
  <Global
    styles={theme => css`

    @import url('https://fonts.googleapis.com/css?family=${
      theme.headingsFamily
    }:400,700|${theme.fontfamily}:400,700');

    * {
     box-sizing: border-box;
    }

    html {
      font-size: ${theme.htmlFontScale}%;
    }

    html,
    body,
    #root {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSizes[3]};
      color: ${theme.colors.on.background};
      background: ${theme.colors.background};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .heading {
      font-family: ${theme.headingsFamily};
      font-weight: bold;
      font-size: ${theme.fontSizes[3]};
    }

    h1.heading {
      font-size: ${theme.fontSizes[6]}
    }

    h2.heading {
      font-size: ${theme.fontSizes[5]}
    }

    .surface {
      color: ${theme.colors.on.surface};
      background: ${theme.colors.surface};
    }

    a:link,
    a:visited,
    a:active {
      text-decoration: none;
      cursor: pointer;
      color: ${theme.colors.primary};
      background: transparent;
    }

    button, .hoverable {
      cursor: pointer;
    }

    a:disabled, button:disabled, .hoverable:disabled, .disabled {
      cursor: default;
    }

    :active {
      box-shadow: none!important;
    }
  `}
  />
);

export default GlobalStyles;
