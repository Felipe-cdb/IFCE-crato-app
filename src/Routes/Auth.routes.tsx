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
import { defaultStyleProperties } from '../base/styles';

const AuthRoutes = () => (<>

    <StatusBar backgroundColor={defaultStyleProperties.greenColor} barStyle={"light-content"} translucent />

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
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />
    </AuthDrawer.Navigator>
</>);

export default AuthRoutes;