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

const ListScreen = () => {
  return (
    <Container>
      <StyledText>List Screen</StyledText>
    </Container>
  );
};

export default memo(ListScreen);
