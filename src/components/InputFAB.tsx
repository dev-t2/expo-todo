import { memo, useCallback, useRef, useState } from 'react';
import { TextInput, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IStyledView {
  isOpened: boolean;
  windowWidth: number;
}

const StyledView = styled.View<IStyledView>(({ theme, isOpened, windowWidth }) => ({
  position: 'absolute',
  bottom: 30,
  right: 10,
  width: isOpened ? windowWidth - 20 : 60,
  height: 60,
  justifyContent: 'center',
  backgroundColor: theme.colors.primary.default,
  borderRadius: 30,
}));

const StyledTextInput = styled.TextInput(({ theme }) => ({
  paddingLeft: 20,
  paddingRight: 70,
  color: theme.colors.white,
}));

const StyledPressable = styled.Pressable(({ theme }) => ({
  position: 'absolute',
  bottom: 30,
  right: 10,
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.primary.default,
  borderRadius: 30,
}));

const InputFAB = () => {
  const { width } = useWindowDimensions();

  const theme = useTheme();

  const [isOpened, setIsOpened] = useState(false);
  const [text, setText] = useState('');

  const inputRef = useRef<TextInput>(null);

  const onPressOut = useCallback(() => {
    if (isOpened) {
      inputRef.current?.blur();

      setIsOpened(false);
      setText('');
    } else {
      inputRef.current?.focus();

      setIsOpened(true);
    }
  }, [isOpened]);

  const onChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  const onBlur = useCallback(() => {
    if (isOpened) {
      inputRef.current?.blur();

      setIsOpened(false);
      setText('');
    }
  }, [isOpened]);

  return (
    <>
      <StyledView isOpened={isOpened} windowWidth={width}>
        <StyledTextInput
          ref={inputRef}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          returnKeyType="done"
          value={text}
          onChangeText={onChangeText}
          onBlur={onBlur}
        />
      </StyledView>

      <StyledPressable hitSlop={10} onPressOut={onPressOut}>
        <MaterialCommunityIcons name="plus" size={24} color={theme.colors.white} />
      </StyledPressable>
    </>
  );
};

export default memo(InputFAB);
