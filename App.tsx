import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/theme';

const StyledView = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.background,
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledView></StyledView>
    </ThemeProvider>
  );
};

export default memo(App);
