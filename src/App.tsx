/* eslint-disable camelcase */
// import '~/config/window';
// import '~/config/reactotronConfig';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';
import theme from '~/global/styles/theme';
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { AppRoutes } from '~/routes/app.routes';
import Footer from '~/components/Footer';
import { navigationRef } from '~/routes/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
