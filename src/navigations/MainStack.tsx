import { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';

import { HeaderLeft, HeaderRight } from '../components';
import { ListScreen, SettingsScreen } from '../screens';

export type MainStackParamList = {
  List: undefined;
  Settings: undefined;
};

export type ListScreenProps = NativeStackScreenProps<MainStackParamList, 'List'>;
export type SettingsScreenProps = NativeStackScreenProps<MainStackParamList, 'Settings'>;

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
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
    <Navigator screenOptions={screenOptions}>
      <Screen name="List" component={ListScreen} options={listOptions} />
      <Screen name="Settings" component={SettingsScreen} options={settingsOptions} />
    </Navigator>
  );
};

export default memo(MainStack);
