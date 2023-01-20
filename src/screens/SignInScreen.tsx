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

const SignInScreen = () => {
  return (
    <Container>
      <StyledImage source={require('../../assets/test.png')} />
    </Container>
  );
};

export default memo(SignInScreen);
