import { memo, useCallback } from 'react';
import styled from '@emotion/native';

import { useAppDispatch } from '../store';
import { logout } from '../slices/user';
import { Button } from '../components';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 20,
});

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Container>
      <Button type="error" title="Logout" onPress={onLogout} />
    </Container>
  );
};

export default memo(SettingsScreen);
