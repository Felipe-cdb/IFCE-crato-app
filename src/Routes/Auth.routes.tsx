import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator
        initialRouteName='Login'
    >
        <AuthStack.Screen
            name='Login'
            component={SingIn}
            options={() => ({
                headerShown: false
            })}
        />

        <AuthStack.Screen
            name='Cadastro'
            component={SignUp}
            options={() => ({
                headerShown: false
            })}
        />
    </AuthStack.Navigator>
);

export default AuthRoutes;