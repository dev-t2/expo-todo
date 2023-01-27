import { FC, memo, useCallback } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

import { AuthStackParamList } from '../navigations/AuthStack';

const HeaderRight: FC<HeaderButtonProps> = ({ tintColor }) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const onPress = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  return (
    <Pressable hitSlop={10} onPress={onPress}>
      <MaterialCommunityIcons name="cog" size={20} color={tintColor} />
    </Pressable>
  );
};

export default memo(HeaderRight);
