import { FC, memo, Ref, useCallback, useMemo, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  width: '100%',
  paddingHorizontal: 20,
  marginVertical: 10,
});

interface ITitle {
  isFocused: boolean;
  value: string;
}

const Title = styled.Text<ITitle>(({ theme, isFocused, value }) => ({
  color: isFocused
    ? theme.colors.primary.default
    : value
    ? theme.colors.black
    : theme.colors.gray[500],
  fontWeight: isFocused || value ? '600' : '500',
}));

interface IInputContainer {
  isFocused: boolean;
  value: string;
}

const InputContainer = styled.View<IInputContainer>(({ theme, isFocused, value }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  borderWidth: isFocused || value ? 2 : 1,
  borderRadius: 8,
  borderColor: isFocused
    ? theme.colors.primary.default
    : value
    ? theme.colors.black
    : theme.colors.gray[500],
  marginTop: 4,
}));

interface IStyledTextInput {
  isFocused: boolean;
  value: string;
}

const StyledTextInput = styled.TextInput<IStyledTextInput>(({ theme, isFocused, value }) => ({
  flex: 1,
  height: 40,
  paddingLeft: 10,
  color: isFocused || value ? theme.colors.black : theme.colors.gray[500],
}));

interface IInput extends TextInputProps {
  inputRef?: Ref<TextInput>;
  title: string;
  icon: 'email' | 'lock';
  value: string;
}

const Input: FC<IInput> = ({ inputRef, title, icon, value, ...props }) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const iconColor = useMemo(() => {
    return isFocused
      ? theme.colors.primary.default
      : value
      ? theme.colors.black
      : theme.colors.gray[500];
  }, [isFocused, theme.colors, value]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <Title isFocused={isFocused} value={value}>
        {title}
      </Title>

      <InputContainer isFocused={isFocused} value={value}>
        <MaterialCommunityIcons name={icon} size={20} color={iconColor} />

        <StyledTextInput
          {...props}
          ref={inputRef}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          placeholderTextColor={theme.colors.gray[500]}
          isFocused={isFocused}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputContainer>
    </Container>
  );
};

export default memo(Input);
