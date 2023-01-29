import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@emotion/react';

import { store } from './src/store';
import { theme } from './src/theme';
import RootStack from './src/navigations';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />

          <RootStack />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default memo(App);
