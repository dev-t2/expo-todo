import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
});

const SettingsScreen = () => {
  return (
    <Container>
      <StyledText>Settings Screen</StyledText>
    </Container>
  );
};

export default memo(SettingsScreen);
