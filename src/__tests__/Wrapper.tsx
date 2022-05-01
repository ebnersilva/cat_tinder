import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { render, RenderOptions } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';

import theme from '~/global/styles/theme';

const INITIAL_STATE = {
  exampleIndex: {
    data: [],
    loading: false,
    error: '',
  },
};

const mockStore = configureStore([]);
const store = mockStore(INITIAL_STATE);

const reduxRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    ),
    ...options,
  });
};

// re-export everything for convenience
export * from '@testing-library/react-native';

// override render method
export { reduxRender as render, store };
