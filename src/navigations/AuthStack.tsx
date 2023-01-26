import { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';

import { ListScreen, SignInScreen } from '../screens';

type AuthStackParamList = {
  SignIn: undefined;
  List: undefined;
};

export type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;
export type ListScreenProps = NativeStackScreenProps<AuthStackParamList, 'List'>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const theme = useTheme();

  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return {
      contentStyle: {
        backgroundColor: theme.colors.white,
      },
    };
  }, [theme.colors.white]);

  return (
    <Navigator initialRouteName="SignIn" screenOptions={screenOptions}>
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="List" component={ListScreen} />
    </Navigator>
  );
};

export default memo(AuthStack);
