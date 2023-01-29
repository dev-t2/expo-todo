import { memo, useCallback, useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import styled from '@emotion/native';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '../store';
import { insertTodo, ITodo, updateTodos } from '../slices/user';
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

  const { getItem, setItem } = useAsyncStorage('todos');

  const { todos } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getItem();
      const todos: ITodo[] = JSON.parse(data || '[]');

      dispatch(updateTodos(todos));
    })();
  }, [getItem, dispatch]);

  const onIsBottom = useCallback((isBottom: boolean) => {
    setIsBottom(isBottom);
  }, []);

  const onInsert = useCallback(
    async (task: string) => {
      const id = nanoid();
      const todo = { id, task, isDone: false };

      await setItem(JSON.stringify([todo, ...todos]));

      dispatch(insertTodo(todo));
    },
    [dispatch, setItem, todos]
  );

  return (
    <Container bottom={bottom}>
      <List todos={todos} onIsBottom={onIsBottom} />

      <InputFAB isBottom={isBottom} onInsert={onInsert} />
    </Container>
  );
};

export default memo(ListScreen);
