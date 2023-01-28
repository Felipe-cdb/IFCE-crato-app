import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default function StackNavigation() {

  return (
      <Stack.Navigator
        initialRouteName="Login"
      >

        <Stack.Screen
            name='Login'
            component={SingIn}
            options={() => ({
                headerShown: false
            })}
        />

        <Stack.Screen
            name='Cadastro'
            component={SignUp}
            options={() => ({
                headerShown: false
            })}
        />

        <Stack.Screen
            name='Home'
            component={Home}
            options={() => ({
                headerShown: false
            })}
        />  
    
    </Stack.Navigator>
  );
}