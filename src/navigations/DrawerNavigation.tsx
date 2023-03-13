import React, { useContext } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../context/auth';

const Drawer = createDrawerNavigator()

import CustomDrawerContent from "../components/CustomDrawer";

import Home from '../pages/Home';
import Refectory from '../pages/Refectory';
import NewCommunicated from '../pages/NewCommunicated';
import { UserPermitions } from "../base/Enums";

function DrawerNavigation() {

    const { user } = useContext(AuthContext);

  return (
    <>
        <StatusBar backgroundColor={'#19882C'} barStyle={"light-content"} translucent/>

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
                    drawerIcon: ({size}) => (
                        <Icon name="text-box-multiple-outline"
                            color="#000"
                            style={stylesNavigation.icons}
                        />
                    )
                }}
            />

            {user.roles.includes(UserPermitions.MM) &&
                <Drawer.Screen
                    name="Novo Comunicado"
                    component={NewCommunicated}
                    options={{
                        headerShown: false,
                        drawerIcon: ({size}) => (
                            <Icon
                                name="note-plus"
                                color="#000"
                                style={stylesNavigation.icons}
                            />
                        )
                    }}
                />
            }

            {user.roles.includes(UserPermitions.RM) &&
                <Drawer.Screen
                    name="Refeitório"
                    component={Refectory}
                    options={{
                        headerShown: false,
                        drawerIcon: ({size}) => (
                            <Icon name="silverware-fork-knife"
                                color="#000"
                                style={stylesNavigation.icons}
                            />
                        )
                    }}
                />
            }
        </Drawer.Navigator>
    </>
  );
}

const stylesNavigation = StyleSheet.create({
    icons: {
        fontSize: RFValue(30),
    },
    fontDrawer:{
        fontSize: RFValue(16),
    }
});

export default DrawerNavigation;