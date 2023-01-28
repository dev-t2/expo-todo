import { FC, memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import ListItem, { IListItem } from './ListItem';
import ListHeader from './ListHeader';
import ItemSeparator from './ItemSeparator';
import ListEmpty from './ListEmpty';

interface IList {
  todos: IListItem[];
}

const List: FC<IList> = ({ todos }) => {
  const keyExtractor = useCallback(({ id }: IListItem) => `${id}`, []);

  const renderItem = useCallback<ListRenderItem<IListItem>>(({ item }) => {
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
