import React from "react";
import { StatusBar } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppRoutesDrawer = createDrawerNavigator()

import Home from '../pages/Home';
import stylesNavigation from "./styles";
import Refectory from '../pages/Refectory';
import RefectoryForms from "../pages/RefectoryForms";
import RefectoryReport from "../pages/RefectoryReport";
import NewCommunicated from '../pages/NewCommunicated';
import CustomDrawerContent from "../components/CustomDrawer";
import ListRefectoryForms from "../pages/ListRefectoryForms";
import EditProfile from "../pages/EditProfile";
import UserCard from "../pages/UserCard";

interface ManagerProps {
    mural?: boolean,
    refactory?: boolean,
    permitions?: boolean,
};

const  AppRoutesRoutes = ({mural, permitions,refactory}: ManagerProps) => (<>
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
            name="Relatório do Refeitório"
            component={RefectoryReport}
            options={{
                headerShown: false,
                drawerIcon: () => (
                    <Icon name="chart-bar"
                        color="#000"
                        style={stylesNavigation.icons}
                    />
                )
            }}
        />}

        {refactory && <AppRoutesDrawer.Screen
            name="Dados do Formulário"
            component={RefectoryForms}
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
    </AppRoutesDrawer.Navigator>
</>);

export default AppRoutesRoutes;