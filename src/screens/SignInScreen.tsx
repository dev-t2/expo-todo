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
          keyboardType="email-address"
          returnKeyType="next"
          title="Email"
          placeholder="Please enter your email"
          value={email}
          onChangeText={onChangeEmail}
        />

        <Input
          secureTextEntry
          title="Password"
          placeholder="Please enter your password"
          value={password}
          onChangeText={onChangePassword}
        />
      </Container>
    </SafeInputContainer>
  );
};

export default memo(SignInScreen);
