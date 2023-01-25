import { memo } from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { ListScreen, SignInScreen } from '../screens';

type AuthStackParamList = {
  SignIn: undefined;
  List: undefined;
};

export type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;
export type ListScreenProps = NativeStackScreenProps<AuthStackParamList, 'List'>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Navigator initialRouteName="SignIn">
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="List" component={ListScreen} />
    </Navigator>
  );
};

export default memo(AuthStack);
