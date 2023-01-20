import { FC, memo } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  width: '100%',
  paddingHorizontal: 20,
  marginVertical: 10,
});

const Title = styled.Text({
  fontWeight: '500',
});

const StyledTextInput = styled.TextInput({
  height: 40,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderRadius: 8,
  marginTop: 4,
});

interface IInput extends TextInputProps {
  title: string;
  placeholder?: string;
}

const Input: FC<IInput> = ({ title, placeholder, ...props }) => {
  const theme = useTheme();

  return (
    <Container>
      <Title>{title}</Title>

      <StyledTextInput
        {...props}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="none"
        placeholder={placeholder ?? title}
        placeholderTextColor={theme.colors.gray[500]}
      />
    </Container>
  );
};

export default memo(Input);
