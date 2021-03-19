import React, { memo } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import { theme } from './src/theme';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledView></StyledView>
    </ThemeProvider>
  );
};

export default memo(App);
