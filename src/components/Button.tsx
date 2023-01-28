import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IContainer {
  color: {
    light: string;
    default: string;
    dark: string;
  };
  isPressed: boolean;
}

const Container = styled.Pressable<IContainer>(({ color, disabled, isPressed }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 16,
  backgroundColor: disabled ? color.light : isPressed ? color.dark : color.default,
  opacity: disabled ? 0.8 : 1,
  borderRadius: 8,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.white,
  fontWeight: '700',
}));

interface IButton {
  type?: 'primary' | 'error';
  isDisabled?: boolean;
  title: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ type = 'primary', isDisabled, title, onPress }) => {
  const theme = useTheme();

  const [isPressed, setIsPressed] = useState(false);

  const color = useMemo(() => {
    if (type === 'error') {
      return theme.colors.error;
    }

    return theme.colors.primary;
  }, [type, theme.colors]);

  const onPressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressed(false);

    onPress();
  }, [onPress]);

  return (
    <Container
      color={color}
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
