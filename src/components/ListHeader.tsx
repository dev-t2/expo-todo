import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  height: 20,
});

const ListHeader = () => {
  return <Container />;
};

export default memo(ListHeader);
