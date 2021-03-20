import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import { theme } from './src/theme';
import { Input } from './src/components';

const StyledSafeAreaView = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const StyledText = styled.Text(({ theme }) => ({
  margin: 24,
  color: theme.onPrimary,
  fontSize: 40,
  fontWeight: 'bold',
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <StatusBar />

        <StyledText>TODO</StyledText>

        <Input placeholder="+ Add a Task" />
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

export default memo(App);
