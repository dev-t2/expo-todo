import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Keyboard, Platform, TextInput, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import { nanoid } from 'nanoid';

import { useAppDispatch } from '../store';
import { insertTodo } from '../slices/user';

interface IInputContainer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputWidth: any;
  keyboardHeight: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttonRight: any;
}

const InputContainer = styled(Animated.View)<IInputContainer>(
  ({ theme, inputWidth, keyboardHeight, buttonRight }) => ({
    position: 'absolute',
    bottom: keyboardHeight,
    right: buttonRight,
    width: inputWidth,
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

interface IButtonContainer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animatedRotation: any;
  keyboardHeight: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttonRight: any;
}

const ButtonContainer = styled(Animated.View)<IButtonContainer>(
  ({ animatedRotation, keyboardHeight, buttonRight }) => ({
    position: 'absolute',
    bottom: keyboardHeight,
    right: buttonRight,
    width: 60,
    height: 60,
    borderRadius: 30,
    transform: [{ rotate: animatedRotation }],
  })
);

const StyledPressable = styled.Pressable(({ theme }) => ({
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.primary.default,
  borderRadius: 30,
}));

const BOTTOM = 30;
const INPUT_WIDTH = 60;
const BUTTON_RIGHT = 10;

interface IInputFAB {
  isBottom: boolean;
}

const InputFAB: FC<IInputFAB> = ({ isBottom }) => {
  const { width } = useWindowDimensions();

  const theme = useTheme();

  const dispatch = useAppDispatch();

  const [isOpened, setIsOpened] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);
  const [text, setText] = useState('');

  const inputRef = useRef<TextInput>(null);
  const inputWidth = useRef(new Animated.Value(INPUT_WIDTH)).current;
  const buttonRotation = useRef(new Animated.Value(0)).current;
  const buttonRight = useRef(new Animated.Value(BUTTON_RIGHT)).current;

  const animatedRotation = useMemo(() => {
    return buttonRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '315deg'],
    });
  }, [buttonRotation]);

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
    Animated.timing(buttonRight, {
      toValue: isBottom ? BUTTON_RIGHT - INPUT_WIDTH : BUTTON_RIGHT,
      useNativeDriver: false,
    }).start();
  }, [buttonRight, isBottom]);

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

      Animated.spring(buttonRotation, {
        toValue: 0,
        useNativeDriver: false,
        bounciness: 20,
      }).start();
    } else {
      setIsOpened(true);

      Animated.timing(inputWidth, {
        toValue: width - 20,
        useNativeDriver: false,
        duration: 250,
      }).start(() => {
        inputRef.current?.focus();
      });

      Animated.spring(buttonRotation, {
        toValue: 1,
        useNativeDriver: false,
        bounciness: 20,
      }).start();
    }
  }, [isOpened, inputWidth, width, buttonRotation]);

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

  const onSubmitEditing = useCallback(() => {
    const id = nanoid();
    const task = text.trim();

    if (task) {
      dispatch(insertTodo({ id, task, isDone: false }));

      setText('');
    }
  }, [text, dispatch]);

  return (
    <>
      <InputContainer
        inputWidth={inputWidth}
        keyboardHeight={keyboardHeight}
        buttonRight={buttonRight}
      >
        <StyledTextInput
          ref={inputRef}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          returnKeyType="done"
          value={text}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
        />
      </InputContainer>

      <ButtonContainer
        animatedRotation={animatedRotation}
        keyboardHeight={keyboardHeight}
        buttonRight={buttonRight}
      >
        <StyledPressable hitSlop={10} onPressOut={onPressOut}>
          <MaterialCommunityIcons name="plus" size={24} color={theme.colors.white} />
        </StyledPressable>
      </ButtonContainer>
    </>
  );
};

export default memo(InputFAB);
