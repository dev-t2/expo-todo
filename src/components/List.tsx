import { FC, memo, useCallback } from 'react';
import { FlatList, ListRenderItem, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { useAppSelector } from '../store';
import { ITodo } from '../slices/user';
import ListItem from './ListItem';
import ListHeaderAndFooter from './ListHeaderAndFooter';
import ItemSeparator from './ItemSeparator';
import ListEmpty from './ListEmpty';

interface IList {
  onIsBottom: (isBottom: boolean) => void;
}

const List: FC<IList> = ({ onIsBottom }) => {
  const { todos } = useAppSelector((state) => state.user);

  const keyExtractor = useCallback(({ id }: ITodo) => id, []);

  const renderItem = useCallback<ListRenderItem<ITodo>>(({ item }) => {
    return <ListItem {...item} />;
  }, []);

  const onScroll = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentSize, contentOffset, layoutMeasurement } = nativeEvent;

      const distance = contentSize.height - (contentOffset.y + layoutMeasurement.height);

      onIsBottom(!(distance > 20 || contentOffset.y === 0));
    },
    [onIsBottom]
  );

  return todos.length ? (
    <FlatList
      data={todos}
      windowSize={5}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderAndFooter}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={ListHeaderAndFooter}
      onScroll={onScroll}
    />
  ) : (
    <ListEmpty />
  );
};

export default memo(List);
