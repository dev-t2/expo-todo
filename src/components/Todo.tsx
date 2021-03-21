import React, { FC, memo, useCallback, useState } from 'react';
import styled from 'styled-components/native';

import Icon from './Icon';
import Input from './Input';

const StyledView = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.surface,
  borderRadius: 8,
  paddingHorizontal: 8,
  paddingVertical: 4,
  marginVertical: 4,
}));

interface IStyledText {
  completed: boolean;
}

const StyledText = styled.Text<IStyledText>(({ theme, completed }) => ({
  flex: 1,
  fontSize: 24,
  color: completed ? theme.onSecondary : theme.onPrimary,
  textDecorationLine: completed ? 'line-through' : 'none',
}));

interface ITodo {
  todo: Todo;
  onCheck: (id: string) => () => void;
  onUpdate: (id: string, text: string) => () => void;
  onDelete: (id: string) => () => void;
}

const Todo: FC<ITodo> = ({ todo, onCheck, onUpdate, onDelete }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [text, setText] = useState(todo.text);

  const onPressOut = useCallback(() => {
    setIsUpdate(true);
  }, []);

  const onChangeText = useCallback(text => {
    setText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    setIsUpdate(false);

    console.log('onSubmitEditing');

    onUpdate(todo.id, text);
  }, []);

  return isUpdate ? (
    <Input
      value={text}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  ) : (
    <StyledView>
      <Icon
        name={todo.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
        completed={todo.completed}
        onPressOut={onCheck(todo.id)}
      />

      <StyledText completed={todo.completed}>{todo.text}</StyledText>

      {todo.completed || (
        <Icon
          name="pencil"
          completed={todo.completed}
          onPressOut={onPressOut}
        />
      )}

      <Icon
        name="delete-forever"
        completed={todo.completed}
        onPressOut={onDelete(todo.id)}
      />
    </StyledView>
  );
};

export default memo(Todo);
