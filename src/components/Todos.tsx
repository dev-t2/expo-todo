import React, { FC, memo } from 'react';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

interface IStyledScrollView {
  width: number;
}

const StyledScrollView = styled.ScrollView<IStyledScrollView>(({ width }) => ({
  flex: 1,
  width: width - 40,
}));

interface ITodos {
  children: JSX.Element[];
}

const Todos: FC<ITodos> = ({ children }) => {
  const { width } = useWindowDimensions();

  return <StyledScrollView width={width}>{children}</StyledScrollView>;
};

export default memo(Todos);
