import React, { FC, memo } from 'react';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

interface IStyledInput {
  width: number;
}

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.onSecondary,
}))<IStyledInput>(({ theme, width }) => ({
  width: width - 40,
  height: 60,
  marginVertical: 4,
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius: 8,
  backgroundColor: theme.surface,
  color: theme.onPrimary,
  fontSize: 24,
}));

interface IInput {
  placeholder: string;
}

const Input: FC<IInput> = ({ placeholder }) => {
  const width = useWindowDimensions().width;

  return (
    <StyledTextInput
      width={width}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardAppearance="dark"
      returnKeyType="done"
      placeholder={placeholder}
    />
  );
};

export default memo(Input);
