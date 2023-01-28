import { FC, memo } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View({
  paddingVertical: 16,
  paddingHorizontal: 20,
  borderWidth: 1,
  borderRadius: 8,
  marginHorizontal: 10,
});

export interface IListItem {
  id: number;
  task: string;
  isDone: boolean;
}

const ListItem: FC<IListItem> = ({ task }) => {
  return (
    <Container>
      <Text>{task}</Text>
    </Container>
  );
};

export default memo(ListItem);
