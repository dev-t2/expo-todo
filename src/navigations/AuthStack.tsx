import { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';

import { HeaderLeft, HeaderRight } from '../components';
import { ListScreen, SettingsScreen, SignInScreen } from '../screens';

export type AuthStackParamList = {
  SignIn: undefined;
  List: undefined;
  Settings: undefined;
};

export type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;
export type ListScreenProps = NativeStackScreenProps<AuthStackParamList, 'List'>;
export type SettingsScreenProps = NativeStackScreenProps<AuthStackParamList, 'Settings'>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const theme = useTheme();

  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return {
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: '700' },
      headerTintColor: theme.colors.black,
      headerLeft: (props) => <HeaderLeft {...props} />,
      contentStyle: { backgroundColor: theme.colors.white },
    };
  }, [theme.colors]);

  const signInOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { title: 'Login' };
  }, []);

  const listOptions = useMemo<NativeStackNavigationOptions>(() => {
    return {
      title: 'TODO List',
      headerRight: (props) => <HeaderRight {...props} />,
    };
  }, []);

  const settingsOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { title: 'Settings' };
  }, []);

  return (
    <Navigator initialRouteName="SignIn" screenOptions={screenOptions}>
      <Screen name="SignIn" component={SignInScreen} options={signInOptions} />
      <Screen name="List" component={ListScreen} options={listOptions} />
      <Screen name="Settings" component={SettingsScreen} options={settingsOptions} />
    </Navigator>
  );
};

export default memo(AuthStack);
