import React, { memo } from 'react';
import { useWindowDimensions } from 'react-native';
import styled from '@emotion/native';

interface IStyledInput {
  width: number;
}

const StyledInput = styled.TextInput<IStyledInput>(({ theme, width }) => ({
  width: width - 40,
  height: 60,
  marginVertical: 4,
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius: 8,
  backgroundColor: theme.surface,
  fontSize: 24,
  color: theme.onPrimary,
}));

const Input = () => {
  const width = useWindowDimensions().width;

  return <StyledInput width={width} />;
};

export default memo(Input);
