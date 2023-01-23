import { FC, memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

interface IContainer {
  isPressed: boolean;
}

const Container = styled.Pressable<IContainer>(({ theme, disabled, isPressed }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 16,
  backgroundColor: disabled
    ? theme.colors.primary.light
    : isPressed
    ? theme.colors.primary.dark
    : theme.colors.primary.default,
  opacity: disabled ? 0.8 : 1,
  borderRadius: 8,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.white,
  fontWeight: '700',
}));

interface IButton {
  isDisabled?: boolean;
  title: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ isDisabled, title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const onPressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressed(false);

    onPress();
  }, [onPress]);

  return (
    <Container
      disabled={isDisabled}
      isPressed={isPressed}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default memo(Button);
