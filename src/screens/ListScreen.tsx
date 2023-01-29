import { memo, useCallback, useState } from 'react';
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

  const [isBottom, setIsBottom] = useState(false);

  const onIsBottom = useCallback((isBottom: boolean) => {
    setIsBottom(isBottom);
  }, []);

  return (
    <Container bottom={bottom}>
      <List onIsBottom={onIsBottom} />

      <InputFAB isBottom={isBottom} />
    </Container>
  );
};

export default memo(ListScreen);
