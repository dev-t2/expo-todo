import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledImage = styled.Image({
  width: 200,
  height: 200,
});

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 18,
  fontWeight: '700',
  color: theme.colors.primary.dark,
  marginTop: 10,
}));

const ListEmpty = () => {
  return (
    <Container>
      <StyledImage source={require('../../assets/main.png')} />

      <StyledText>Please add something to do</StyledText>
    </Container>
  );
};

export default memo(ListEmpty);
