import { memo, useCallback } from 'react';
import { Keyboard, Platform } from 'react-native';
import styled from '@emotion/native';

import { Input } from '../components';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView({
  flex: 1,
});

const StyledPressable = styled.Pressable({
  flex: 1,
});

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledImage = styled.Image({
  width: 200,
  height: 200,
});

const SignInScreen = () => {
  const onPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <StyledKeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })}>
      <StyledPressable onPress={onPress}>
        <StyledView>
          <StyledImage source={require('../../assets/main.png')} />

          <Input
            keyboardType="email-address"
            returnKeyType="next"
            title="Email"
            placeholder="your@email.com"
          />

          <Input secureTextEntry title="Password" placeholder="Please enter your password" />
        </StyledView>
      </StyledPressable>
    </StyledKeyboardAvoidingView>
  );
};

export default memo(SignInScreen);
