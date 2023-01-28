import { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import styled from '@emotion/native';

import { ListItem, Sepatator } from '../components';
import { IListItem } from '../components/ListItem';

const Container = styled.View({
  flex: 1,
});

const todos: IListItem[] = [
  { id: 1, task: 'React Native', isDone: false },
  { id: 2, task: 'FlatList', isDone: false },
  { id: 3, task: 'React Navigation', isDone: true },
  { id: 4, task: 'Todo App', isDone: false },
  { id: 5, task: 'React.memo', isDone: true },
];

const ListScreen = () => {
  const keyExtractor = useCallback(({ id }: IListItem) => `${id}`, []);

  const renderItem = useCallback<ListRenderItem<IListItem>>(({ item }) => {
    return <ListItem {...item} />;
  }, []);

  return (
    <Container>
      <FlatList
        data={todos}
        windowSize={5}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={Sepatator}
      />
    </Container>
  );
};

export default memo(ListScreen);
