import React, { memo, useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import styled, { ThemeProvider } from 'styled-components/native';

import { theme } from './src/theme';
import { Input, Todo, Todos } from './src/components';

const StyledSafeAreaView = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const StyledText = styled.Text(({ theme }) => ({
  margin: 24,
  color: theme.onPrimary,
  fontSize: 40,
  fontWeight: 'bold',
}));

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateStorage = useCallback(async (todos: Todo[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));

      setTodos(todos);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const readStorage = useCallback(async () => {
    const todos = await AsyncStorage.getItem('todos');

    setTodos(JSON.parse(todos ?? '[]'));
  }, []);

  const onFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  const onChangeText = useCallback(text => {
    setText(text);
  }, []);

  const onCreate = useCallback(() => {
    const id = Date.now().toString();
    const updatedTodos = [{ id, text, completed: false }, ...todos];

    updateStorage(updatedTodos);

    setText('');
  }, [text, todos, updateStorage]);

  const onCheck = useCallback(
    id => () => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  const onUpdate = useCallback(
    (id, text) => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      );

      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  const onDelete = useCallback(
    id => () => {
      const updatedTodos = todos.filter(todo => todo.id !== id);

      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  return isReady ? (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <StatusBar />

        <StyledText>TODO</StyledText>

        <Input
          value={text}
          placeholder="Enter what you need to do..."
          onChangeText={onChangeText}
          onSubmitEditing={onCreate}
        />

        <Todos>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheck={onCheck}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </Todos>
      </StyledSafeAreaView>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={readStorage}
      onFinish={onFinish}
      onError={console.error}
    />
  );
};

export default memo(App);
