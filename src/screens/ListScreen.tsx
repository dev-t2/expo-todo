import { memo } from 'react';
import styled from '@emotion/native';

import { List } from '../components';
import { IListItem } from '../components/ListItem';

const Container = styled.View({
  flex: 1,
});

const todos: IListItem[] = [];

const ListScreen = () => {
  return (
    <Container>
      <List todos={todos} />
    </Container>
  );
};

export default memo(ListScreen);
