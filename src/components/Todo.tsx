import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

import { Icon } from '../components';

const StyledView = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.surface,
  borderRadius: 8,
  paddingHorizontal: 8,
  paddingVertical: 4,
  marginVertical: 4,
}));

const StyledText = styled.Text(({ theme }) => ({
  flex: 1,
  fontSize: 24,
  color: theme.onPrimary,
}));

interface ITodo {
  text: string;
}

const Todo: FC<ITodo> = ({ text }) => {
  return (
    <StyledView>
      <Icon name="checkbox-blank-outline" />

      <StyledText>{text}</StyledText>

      <Icon name="pencil" />

      <Icon name="delete-forever" />
    </StyledView>
  );
};

export default memo(Todo);
