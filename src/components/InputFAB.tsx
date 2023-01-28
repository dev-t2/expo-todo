import { FC, memo, useCallback, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IContainer {
  isPressed: boolean;
}

const Container = styled.Pressable<IContainer>(({ theme, isPressed }) => ({
  position: 'absolute',
  bottom: 30,
  right: 10,
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isPressed ? theme.colors.primary.dark : theme.colors.primary.default,
  borderRadius: 30,
}));

interface IInputFAB {
  onPress: () => void;
}

const InputFAB: FC<IInputFAB> = ({ onPress }) => {
  const theme = useTheme();

  const [isPressed, setIsPressed] = useState(false);

  const onPressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressed(false);

    onPress();
  }, [onPress]);

  return (
    <Container hitSlop={10} isPressed={isPressed} onPressIn={onPressIn} onPressOut={onPressOut}>
      <MaterialCommunityIcons name="plus" size={24} color={theme.colors.white} />
    </Container>
  );
};

export default memo(InputFAB);
