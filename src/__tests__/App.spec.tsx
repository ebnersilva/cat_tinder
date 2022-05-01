import 'react-native';
import React from 'react';
import App from '~/App';

import { render, cleanup, store } from '~/__tests__/Wrapper';

describe('App Page', () => {
  beforeEach(() => {
    cleanup();
    store.clearActions();
    store.dispatch = jest.fn();
  });

  it('renders correctly', () => {
    render(<App />);
  });
});
