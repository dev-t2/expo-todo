import { memo, useMemo } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { useAppSelector } from '../store';
import AuthStack, { AuthStackParamList } from './AuthStack';
import MainStack, { MainStackParamList } from './MainStack';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  MainStack: NavigatorScreenParams<MainStackParamList>;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { isLoggedIn } = useAppSelector((state) => state.user);

  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { headerShown: false };
  }, []);

  return (
    <Navigator screenOptions={screenOptions}>
      {isLoggedIn ? (
        <Screen name="MainStack" component={MainStack} />
      ) : (
        <Screen name="AuthStack" component={AuthStack} />
      )}
    </Navigator>
  );
};

export default memo(RootStack);
