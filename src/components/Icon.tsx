import React, { FC, memo } from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IStyledIcon {
  completed: boolean;
}

const StyledIcon = styled(MaterialCommunityIcons)<IStyledIcon>(
  ({ theme, completed }) => ({
    color: completed ? theme.onSecondary : theme.onPrimary,
    margin: 8,
  })
);

interface IIcon {
  name:
    | 'checkbox-blank-outline'
    | 'checkbox-marked'
    | 'delete-forever'
    | 'pencil';
  completed: boolean;
  onPressOut?: (e: GestureResponderEvent) => void;
}

const Icon: FC<IIcon> = ({ name, completed, onPressOut }) => {
  return (
    <Pressable hitSlop={8} onPressOut={onPressOut}>
      <StyledIcon name={name} size={24} completed={completed} />
    </Pressable>
  );
};

export default memo(Icon);
