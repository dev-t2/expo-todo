import { memo, useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native';

import { FloatingActionButton, List } from '../components';
import { IListItem } from '../components/ListItem';

interface IContainer {
  bottom: number;
}

const Container = styled.View<IContainer>(({ bottom }) => ({
  flex: 1,
  paddingBottom: bottom,
}));

const todos: IListItem[] = [];

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();

  const onPress = useCallback(() => {
    console.log('onPress');
  }, []);

  return (
    <Container bottom={bottom}>
      <List todos={todos} />

      <FloatingActionButton onPress={onPress} />
    </Container>
  );
};

export default memo(ListScreen);
