import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import EditProfile from '../pages/EditProfile';
import Drawer from './DrawerNavigation';

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
            name='Drawer'
            component={Drawer}
            options={() => ({
                headerShown: false
            })}
        />  
    
        <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={() => ({
                headerShown: false
            })}
        />
    </Stack.Navigator>
  );
}