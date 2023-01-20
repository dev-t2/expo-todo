import { FC, memo, ReactNode, useCallback } from 'react';
import { Keyboard } from 'react-native';
import styled from '@emotion/native';

const Container = styled.KeyboardAvoidingView({
  flex: 1,
});

const StyledPressable = styled.Pressable({
  flex: 1,
});

interface ISafeInputContainer {
  children: ReactNode;
}

const SafeInputContainer: FC<ISafeInputContainer> = ({ children }) => {
  const onPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Container>
      <StyledPressable onPress={onPress}>{children}</StyledPressable>
    </Container>
  );
};

export default memo(SafeInputContainer);
