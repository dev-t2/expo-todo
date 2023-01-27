import { FC, memo, useCallback } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const HeaderLeft: FC<HeaderBackButtonProps> = ({ canGoBack, tintColor }) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    if (canGoBack) {
      navigation.goBack();
    }
  }, [canGoBack, navigation]);

  if (!canGoBack) {
    return null;
  }

  return (
    <Pressable hitSlop={10} onPress={onPress}>
      <MaterialCommunityIcons name="chevron-left" size={30} color={tintColor} />
    </Pressable>
  );
};

export default memo(HeaderLeft);
