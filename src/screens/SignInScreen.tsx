import { memo } from 'react';
import styled from '@emotion/native';

import { Input, SafeInputContainer } from '../components';

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
    <SafeInputContainer>
      <Container>
        <StyledImage source={require('../../assets/main.png')} />

        <Input
          keyboardType="email-address"
          returnKeyType="next"
          title="Email"
          placeholder="your@email.com"
        />

        <Input secureTextEntry title="Password" placeholder="Please enter your password" />
      </Container>
    </SafeInputContainer>
  );
};

export default memo(SignInScreen);
