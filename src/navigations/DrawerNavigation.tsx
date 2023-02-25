import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator()

import CustomDrawerContent from "../components/CustomDrawer";

import Home from '../pages/Home';
import Refectory from '../pages/Refectory';

function DrawerNavigation() {

    return (
        <>
            <StatusBar backgroundColor={'#19882C'} barStyle={"light-content"} translucent />

            <Drawer.Navigator
                initialRouteName="Mural"
                screenOptions={{
                    drawerLabelStyle: stylesNavigation.fontDrawer
                }}
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Mural"
                    component={Home}
                    options={{
                        headerShown: false,
                        drawerIcon: ({ size }) => (
                            <Icon name="text-box-multiple-outline"
                                color="#000"
                                style={stylesNavigation.icons}
                            />
                        )
                    }}
                />

                <Drawer.Screen
                    name="Refeitório"
                    component={Refectory}
                    options={{
                        headerShown: false,
                        drawerIcon: ({ size }) => (
                            <Icon name="silverware-fork-knife"
                                color="#000"
                                style={stylesNavigation.icons}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </>
    );
}

const stylesNavigation = StyleSheet.create({
    icons: {
        fontSize: RFValue(30),
    },
    fontDrawer: {
        fontSize: RFValue(16),
    }
});

export default DrawerNavigation;