import React from "react";
import { StatusBar } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppRoutesDrawer = createDrawerNavigator()

import Home from '../pages/Home';
import stylesNavigation from "./styles";
import Refectory from '../pages/Refectory';
import CreateForms from "../pages/CreateForms";
import NewCommunicated from '../pages/NewCommunicated';
import CustomDrawerContent from "../components/CustomDrawer";
import ListRefectoryForms from "../pages/ListRefectoryForms";
import EditProfile from "../pages/EditProfile";
import UserCard from "../pages/UserCard";
import Notifications from "../pages/Notifications";

interface ManagerProps {
    mural?: boolean,
    refactory?: boolean,
    permitions?: boolean,
};

const AppRoutesRoutes = ({ mural, permitions, refactory }: ManagerProps) => (<>
    <StatusBar backgroundColor={'#19882C'} barStyle={"light-content"} translucent />

    <AppRoutesDrawer.Navigator
        initialRouteName="Mural"
        screenOptions={{
            drawerLabelStyle: stylesNavigation.fontDrawer
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <AppRoutesDrawer.Screen
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

        {mural && <AppRoutesDrawer.Screen
            name="Novo Comunicado"
            component={NewCommunicated}
            options={{
                headerShown: false,
                drawerIcon: () => (
                    <Icon
                        name="note-plus"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />}

        <AppRoutesDrawer.Screen
            name="Refeitório"
            component={Refectory}
            options={{
                headerShown: false,
                drawerIcon: () => (
                    <Icon name="silverware-fork-knife"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />

        <AppRoutesDrawer.Screen
            name="Identificação"
            component={UserCard}
            options={{
                headerShown: false,
                drawerIcon: () => (
                    <Icon name="card-account-details-outline"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />

        {refactory && <AppRoutesDrawer.Screen
            name="Formulários do Refeitório"
            component={ListRefectoryForms}
            options={{
                headerShown: false,
                drawerIcon: () => (
                    <Icon name="clipboard-edit-outline"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />}

        {refactory && <AppRoutesDrawer.Screen
            name="CreateForm"
            component={CreateForms}
            options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
            }}
        />}

        <AppRoutesDrawer.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                drawerIcon: () => (
                    <Icon name="silverware-fork-knife"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />

        <AppRoutesDrawer.Screen
            name="Notifications"
            component={Notifications}
            options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                drawerIcon: () => (
                    <Icon name="silverware-fork-knife"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />
    </AppRoutesDrawer.Navigator>
</>);

export default AppRoutesRoutes;