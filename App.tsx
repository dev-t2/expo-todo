import React, { memo, useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
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

const sampleTodos: Todo[] = [
  { id: '1', text: 'T1', completed: false },
  { id: '2', text: 'T2', completed: true },
  { id: '3', text: 'T3', completed: false },
  { id: '4', text: 'T4', completed: false },
];

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>(sampleTodos);

  const onChangeText = useCallback(text => {
    setText(text);
  }, []);

  const onCreate = useCallback(() => {
    const id = Date.now().toString();

    setTodos(todos => [{ id, text, completed: false }, ...todos]);
    setText('');
  }, [text]);

  const onCheck = useCallback(
    id => () => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      setTodos(updatedTodos);
    },
    []
  );

  const onUpdate = useCallback(
    (id, text) => () => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      );

      console.log(updatedTodos);

      setTodos(updatedTodos);
    },
    []
  );

  const onDelete = useCallback(
    id => () => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    []
  );

  return (
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
  );
};

export default memo(App);
