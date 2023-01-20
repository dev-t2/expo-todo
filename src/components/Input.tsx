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
}

const Title = styled.Text<ITitle>(({ theme, isFocused }) => ({
  color: isFocused ? theme.colors.primary.default : theme.colors.gray[500],
  fontWeight: isFocused ? '600' : '500',
}));

interface IStyledTextInput {
  isFocused: boolean;
}

const StyledTextInput = styled.TextInput<IStyledTextInput>(({ theme, isFocused }) => ({
  height: 40,
  paddingHorizontal: 10,
  borderWidth: isFocused ? 2 : 1,
  borderRadius: 8,
  borderColor: isFocused ? theme.colors.primary.default : theme.colors.gray[500],
  marginTop: 4,
  color: isFocused ? theme.colors.black : theme.colors.gray[500],
}));

interface IInput extends TextInputProps {
  title: string;
}

const Input: FC<IInput> = ({ title, ...props }) => {
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
      <Title isFocused={isFocused}>{title}</Title>

      <StyledTextInput
        {...props}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="none"
        placeholderTextColor={theme.colors.gray[500]}
        isFocused={isFocused}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Container>
  );
};

export default memo(Input);
