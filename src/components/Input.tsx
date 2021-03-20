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
  alignItems: 'center',
  marginVertical: 4,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 8,
  backgroundColor: theme.surface,
  color: theme.onPrimary,
  fontSize: 24,
}));

interface IInput {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
}

const Input: FC<IInput> = ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
}) => {
  const width = useWindowDimensions().width;

  return (
    <StyledTextInput
      width={width}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardAppearance="dark"
      returnKeyType="done"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default memo(Input);
