import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  height: 1,
  backgroundColor: theme.colors.gray[300],
  margin: 10,
}));

const ItemSeparator = () => {
  return <Container />;
};

export default memo(ItemSeparator);
