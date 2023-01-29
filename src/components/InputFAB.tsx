import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, Platform, TextInput, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IStyledView {
  animatedValue: number;
  keyboardHeight: number;
}

const StyledView = styled(Animated.View)<IStyledView>(
  ({ theme, animatedValue, keyboardHeight }) => ({
    position: 'absolute',
    bottom: keyboardHeight,
    right: 10,
    width: animatedValue,
    height: 60,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary.default,
    borderRadius: 30,
    shadowColor: theme.colors.black,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  })
);

const StyledTextInput = styled.TextInput(({ theme }) => ({
  paddingLeft: 20,
  paddingRight: 70,
  color: theme.colors.white,
}));

interface IStyledPressable {
  keyboardHeight: number;
}

const StyledPressable = styled.Pressable<IStyledPressable>(({ theme, keyboardHeight }) => ({
  position: 'absolute',
  bottom: keyboardHeight,
  right: 10,
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.primary.default,
  borderRadius: 30,
}));

const BOTTOM = 30;
const INPUT_WIDTH = 60;

const InputFAB = () => {
  const { width } = useWindowDimensions();

  const theme = useTheme();

  const [isOpened, setIsOpened] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);
  const [animatedValue, setAnimatedValue] = useState(INPUT_WIDTH);
  const [text, setText] = useState('');

  const inputRef = useRef<TextInput>(null);
  const inputWidth = useRef(new Animated.Value(INPUT_WIDTH)).current;

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const show = Keyboard.addListener('keyboardWillShow', ({ endCoordinates }) => {
        setKeyboardHeight(endCoordinates.height + BOTTOM);
      });

      const hide = Keyboard.addListener('keyboardWillHide', () => {
        setKeyboardHeight(BOTTOM);
      });

      return () => {
        show.remove();
        hide.remove();
      };
    }
  }, []);

  useEffect(() => {
    const id = inputWidth.addListener(({ value }) => {
      setAnimatedValue(value);
    });

    return () => {
      inputWidth.removeListener(id);
    };
  }, [inputWidth]);

  const onPressOut = useCallback(() => {
    if (isOpened) {
      setText('');
      setIsOpened(false);

      Animated.timing(inputWidth, {
        toValue: INPUT_WIDTH,
        useNativeDriver: false,
        duration: 250,
      }).start(() => {
        inputRef.current?.blur();
      });
    } else {
      setIsOpened(true);

      Animated.timing(inputWidth, {
        toValue: width - 20,
        useNativeDriver: false,
        duration: 250,
      }).start(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpened, inputWidth, width]);

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
      <StyledView animatedValue={animatedValue} keyboardHeight={keyboardHeight}>
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

      <StyledPressable hitSlop={10} keyboardHeight={keyboardHeight} onPressOut={onPressOut}>
        <MaterialCommunityIcons name="plus" size={24} color={theme.colors.white} />
      </StyledPressable>
    </>
  );
};

export default memo(InputFAB);
