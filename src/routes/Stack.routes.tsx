import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Login from '../screens/VerificationScreens/LoginScreen';
<<<<<<< HEAD
import RecoverPassword from '../screens/VerificationScreens/RecoverPassword';
=======

>>>>>>> master

export type StackParamList = {
  login: undefined;
  recoverPassword: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
<<<<<<< HEAD
      <Stack.Screen
        name="recoverPassword"
        component={RecoverPassword}
        options={{ headerShown: false }}
      />
=======
>>>>>>> master
    </Stack.Navigator>
  );
}
