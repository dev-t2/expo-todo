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

const Task = styled.Text({
  flex: 1,
  marginHorizontal: 10,
});

export interface IListItem {
  id: number;
  task: string;
  isDone: boolean;
}

const ListItem: FC<IListItem> = ({ task }) => {
  const theme = useTheme();

  return (
    <Container>
      <Task>{task}</Task>

      <Pressable hitSlop={10}>
        <MaterialCommunityIcons name="trash-can" size={20} color={theme.colors.error.default} />
      </Pressable>
    </Container>
  );
};

export default memo(ListItem);
