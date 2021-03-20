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

interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

const sampleTodos: ITodo[] = [
  { id: '1', text: 'T1', completed: false },
  { id: '2', text: 'T2', completed: true },
  { id: '3', text: 'T3', completed: false },
  { id: '4', text: 'T4', completed: false },
];

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<ITodo[]>(sampleTodos);

  const onChangeText = useCallback(text => {
    setText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    const id = Date.now().toString();

    setTodos(prev => [{ id, text, completed: false }, ...prev]);
    setText('');
  }, [text]);

  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <StatusBar />

        <StyledText>TODO</StyledText>

        <Input
          value={text}
          placeholder="Enter what you need to do..."
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />

        <Todos>
          {todos.map(todo => (
            <Todo key={todo.id} text={todo.text} />
          ))}
        </Todos>
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

export default memo(App);
