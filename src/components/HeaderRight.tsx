import { FC, memo } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const HeaderRight: FC<HeaderButtonProps> = ({ tintColor }) => {
  return (
    <Pressable hitSlop={10}>
      <MaterialCommunityIcons name="cog" size={20} color={tintColor} />
    </Pressable>
  );
};

export default memo(HeaderRight);
