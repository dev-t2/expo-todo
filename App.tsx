import React, { memo, useCallback, useState } from 'react';
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
  const [text, setText] = useState('');

  const onChangeText = useCallback(text => {
    setText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    alert(`Add Todo: ${text}`);

    setText('');
  }, [text]);

  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <StatusBar />

        <StyledText>TODO</StyledText>

        <Input
          value={text}
          placeholder="Enter what you need to do..."
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

export default memo(App);
