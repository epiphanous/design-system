import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@emotion/react';
import i18n from './i18n';
import { App } from './components';
import stores from './stores';
import theme from './theme';
import { Loading } from './design-system';

render(
  <Provider {...stores}>
    <Suspense fallback={<Loading />}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);
