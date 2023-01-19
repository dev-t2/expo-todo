import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import { SignInScreen } from './src/screens';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.white,
}));

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />

      <SignInScreen />
    </Container>
  );
};

export default memo(App);
