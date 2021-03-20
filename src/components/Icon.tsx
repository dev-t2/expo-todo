import React, { FC, memo } from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StyledIcon = styled(MaterialCommunityIcons)(({ theme }) => ({
  color: theme.onPrimary,
}));

interface IIcon {
  name:
    | 'checkbox-blank-outline'
    | 'checkbox-marked'
    | 'delete-forever'
    | 'pencil';
  onPressOut?: (e: GestureResponderEvent) => void;
}

const Icon: FC<IIcon> = ({ name, onPressOut }) => {
  return (
    <Pressable hitSlop={10} onPressOut={onPressOut}>
      <StyledIcon name={name} size={32} />
    </Pressable>
  );
};

export default memo(Icon);
