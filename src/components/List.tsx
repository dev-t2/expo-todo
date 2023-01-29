import { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { useAppSelector } from '../store';
import { ITodo } from '../slices/user';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import ItemSeparator from './ItemSeparator';
import ListEmpty from './ListEmpty';

const List = () => {
  const { todos } = useAppSelector((state) => state.user);

  const keyExtractor = useCallback(({ id }: ITodo) => id, []);

  const renderItem = useCallback<ListRenderItem<ITodo>>(({ item }) => {
    return <ListItem {...item} />;
  }, []);

  return todos.length ? (
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
  );
};

export default memo(List);
