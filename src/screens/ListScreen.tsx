import { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import styled from '@emotion/native';

import { ItemSeparator, ListEmpty, ListHeader, ListItem } from '../components';
import { IListItem } from '../components/ListItem';

const Container = styled.View({
  flex: 1,
});

const todos: IListItem[] = [];

const ListScreen = () => {
  const keyExtractor = useCallback(({ id }: IListItem) => `${id}`, []);

  const renderItem = useCallback<ListRenderItem<IListItem>>(({ item }) => {
    return <ListItem {...item} />;
  }, []);

  return (
    <Container>
      {todos.length ? (
        <FlatList
          data={todos}
          windowSize={5}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={ListHeader}
          ItemSeparatorComponent={ItemSeparator}
        />
      ) : (
        <ListEmpty />
      )}
    </Container>
  );
};

export default memo(ListScreen);
