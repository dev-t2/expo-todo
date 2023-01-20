import { FC, memo } from 'react';
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
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
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
  title: string;
  placeholder?: string;
}

const Input: FC<IInput> = ({
  keyboardType = 'default',
  returnKeyType = 'done',
  secureTextEntry,
  title,
  placeholder,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Title>{title}</Title>

      <StyledTextInput
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
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
