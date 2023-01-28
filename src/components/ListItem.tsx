import { FC, memo } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

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
  color: isDone ? theme.colors.black : theme.colors.gray[500],
  marginHorizontal: 10,
}));

export interface IListItem {
  id: number;
  task: string;
  isDone: boolean;
}

const ListItem: FC<IListItem> = ({ task, isDone }) => {
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

      <Pressable hitSlop={10}>
        <MaterialCommunityIcons name="trash-can" size={20} color={theme.colors.error.default} />
      </Pressable>
    </Container>
  );
};

export default memo(ListItem);
