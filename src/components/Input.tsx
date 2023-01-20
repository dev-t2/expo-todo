import { FC, memo } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  width: '100%',
  paddingHorizontal: 20,
  marginVertical: 10,
});

const Title = styled.Text({});

const StyledTextInput = styled.TextInput({
  height: 40,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderRadius: 8,
  marginTop: 4,
});

interface IInput {
  title: string;
  placeholder?: string;
}

const Input: FC<IInput> = ({ title, placeholder }) => {
  const theme = useTheme();

  return (
    <Container>
      <Title>{title}</Title>

      <StyledTextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder ?? title}
        placeholderTextColor={theme.colors.gray[500]}
      />
    </Container>
  );
};

export default memo(Input);
