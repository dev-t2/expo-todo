import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/theme';
import { SignInScreen } from './src/screens';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.white,
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />

        <SignInScreen />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
