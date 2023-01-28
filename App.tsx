import { memo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { AuthStack, MainStack } from './src/navigations';

const App = () => {
  const [isLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />

        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default memo(App);
