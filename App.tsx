import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { AuthStack } from './src/navigations';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />

        <AuthStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default memo(App);
