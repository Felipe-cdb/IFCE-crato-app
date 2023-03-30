import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import { AuthContext } from "../context/auth";
import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import EditProfile from '../pages/EditProfile';
import Drawer from './DrawerNavigation';

export default function StackNavigation() {

    const { user, isUserLoaded } = useContext(AuthContext);
  return (
      <Stack.Navigator
        initialRouteName={isUserLoaded ? "Drawer" : "Login"}
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