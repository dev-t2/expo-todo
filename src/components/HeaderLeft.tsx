import { FC, memo } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const HeaderLeft: FC<HeaderBackButtonProps> = ({ canGoBack, tintColor }) => {
  const navigation = useNavigation();

  if (!canGoBack) {
    return null;
  }

  return (
    <Pressable hitSlop={10} onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="chevron-left" size={30} color={tintColor} />
    </Pressable>
  );
};

export default memo(HeaderLeft);
