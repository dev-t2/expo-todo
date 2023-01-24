import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  );
};

export default memo(AuthStack);
