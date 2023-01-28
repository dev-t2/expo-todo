import { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';

import { SignInScreen } from '../screens';

export type AuthStackParamList = {
  SignIn: undefined;
};

export type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const theme = useTheme();

  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return {
      headerShown: false,
      contentStyle: { backgroundColor: theme.colors.white },
    };
  }, [theme.colors]);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  );
};

export default memo(AuthStack);
