import { FC, memo } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { ITodo } from '../slices/user';

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 16,
  paddingHorizontal: 20,
  borderWidth: 1,
  borderRadius: 8,
  marginHorizontal: 10,
});

interface ITask {
  isDone: boolean;
}

const Task = styled.Text<ITask>(({ theme, isDone }) => ({
  flex: 1,
  color: isDone ? theme.colors.gray[500] : theme.colors.black,
  marginHorizontal: 10,
}));

interface IListItem extends ITodo {
  onDelete: (id: string) => () => void;
}

const ListItem: FC<IListItem> = ({ id, task, isDone, onDelete }) => {
  const theme = useTheme();

  return (
    <Container>
      <Pressable hitSlop={10}>
        {isDone ? (
          <MaterialCommunityIcons
            name={'checkbox-marked'}
            size={20}
            color={theme.colors.primary.default}
          />
        ) : (
          <MaterialCommunityIcons
            name={'checkbox-blank-outline'}
            size={20}
            color={theme.colors.black}
          />
        )}
      </Pressable>

      <Task isDone={isDone}>{task}</Task>

      <Pressable hitSlop={10} onPress={onDelete(id)}>
        <MaterialCommunityIcons name="trash-can" size={20} color={theme.colors.error.default} />
      </Pressable>
    </Container>
  );
};

export default memo(ListItem);
