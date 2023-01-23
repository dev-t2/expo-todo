import { FC, memo, useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
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

interface IStyledTextInput {
  isFocused: boolean;
  value: string;
}

const StyledTextInput = styled.TextInput<IStyledTextInput>(({ theme, isFocused, value }) => ({
  height: 40,
  paddingHorizontal: 10,
  borderWidth: isFocused || value ? 2 : 1,
  borderRadius: 8,
  borderColor: isFocused
    ? theme.colors.primary.default
    : value
    ? theme.colors.black
    : theme.colors.gray[500],
  marginTop: 4,
  color: isFocused || value ? theme.colors.black : theme.colors.gray[500],
}));

interface IInput extends TextInputProps {
  title: string;
  value: string;
}

const Input: FC<IInput> = ({ title, value, ...props }) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);

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

      <StyledTextInput
        {...props}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="none"
        placeholderTextColor={theme.colors.gray[500]}
        isFocused={isFocused}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Container>
  );
};

export default memo(Input);
