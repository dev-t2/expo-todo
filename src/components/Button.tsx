import { FC, memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

interface IContainer {
  isPressed: boolean;
}

const Container = styled.Pressable<IContainer>(({ theme, isPressed }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 16,
  backgroundColor: isPressed ? theme.colors.primary.dark : theme.colors.primary.default,
  borderRadius: 8,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.white,
  fontWeight: '700',
}));

interface IButton {
  title: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const onPressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressed(false);

    onPress();
  }, [onPress]);

  return (
    <Container isPressed={isPressed} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Title>{title}</Title>
    </Container>
  );
};

export default memo(Button);
