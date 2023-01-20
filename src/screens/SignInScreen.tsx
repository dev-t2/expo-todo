import { memo } from 'react';
import styled from '@emotion/native';
import { Input } from '../components';

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
      <StyledImage source={require('../../assets/main.png')} />

      <Input title="Email" placeholder="your@email.com" />
      <Input title="Password" />
    </Container>
  );
};

export default memo(SignInScreen);
