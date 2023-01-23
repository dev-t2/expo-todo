import { memo, useCallback, useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email.trim());
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(password.trim());
  }, []);

  return (
    <SafeInputContainer>
      <Container>
        <StyledImage source={require('../../assets/main.png')} />

        <Input
          title="Email"
          icon="email"
          placeholder="Please enter your email"
          keyboardType="email-address"
          returnKeyType="next"
          value={email}
          onChangeText={onChangeEmail}
        />

        <Input
          title="Password"
          icon="lock"
          placeholder="Please enter your password"
          secureTextEntry
          value={password}
          onChangeText={onChangePassword}
        />
      </Container>
    </SafeInputContainer>
  );
};

export default memo(SignInScreen);
