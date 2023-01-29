import { memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native';

import { InputFAB, List } from '../components';

interface IContainer {
  bottom: number;
}

const Container = styled.View<IContainer>(({ bottom }) => ({
  flex: 1,
  paddingBottom: bottom,
}));

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Container bottom={bottom}>
      <List />
      <InputFAB />
    </Container>
  );
};

export default memo(ListScreen);
