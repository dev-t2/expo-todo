import { memo, useCallback, useRef, useState } from 'react';
import styled from '@emotion/native';

import { Input, SafeInputContainer } from '../components';
import { TextInput } from 'react-native';

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

  const passwordRef = useRef<TextInput>(null);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email.trim());
  }, []);

  const onSubmitEmail = useCallback(() => {
    passwordRef.current?.focus();
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
          blurOnSubmit={false}
          value={email}
          onChangeText={onChangeEmail}
          onSubmitEditing={onSubmitEmail}
        />

        <Input
          inputRef={passwordRef}
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
