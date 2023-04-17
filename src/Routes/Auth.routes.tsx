import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import stylesNavigation from "./styles";

const AuthDrawer = createDrawerNavigator();
import CustomDrawerContent from "../components/CustomDrawer";
import Home from '../pages/Home';

const AuthRoutes = () => (<>

    <StatusBar backgroundColor={'#19882C'} barStyle={"light-content"} translucent />

    <AuthDrawer.Navigator
        initialRouteName='Mural'
        screenOptions={{
            drawerLabelStyle: stylesNavigation.fontDrawer
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <AuthDrawer.Screen
            name="Mural"
            component={Home}
            options={{
                headerShown: false,
                drawerIcon: () => (
                    <Icon name="text-box-multiple-outline"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />

        <AuthDrawer.Screen
            name='Login'
            component={SingIn}
            options={{
                headerShown: false,
                swipeEnabled: false,
                drawerIcon: () => (
                    <Icon name="login"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />

        <AuthDrawer.Screen
            name='Cadastro'
            component={SignUp}
            options={{
                headerShown: false,
                swipeEnabled: false,
                drawerIcon: () => (
                    <Icon name="account-plus-outline"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />
    </AuthDrawer.Navigator>
</>);

export default AuthRoutes;