// import '~/config/window';
// import '~/config/reactotronConfig';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';
import theme from '~/global/styles/theme';

import { AppRoutes } from '~/routes/app.routes';
import Footer from '~/components/Footer';
import { navigationRef } from '~/routes/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <StatusBar style="auto" />
            <AppRoutes />
            <Footer />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
