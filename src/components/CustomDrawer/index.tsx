import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from "../../context/auth"; 

import styles from "./styles";

const CustomDrawerContent = (props: any) => {

    const { signOut, isUserLoaded } = useContext(AuthContext);

    function sair(){
        props.navigation.navigate('Mural')
        signOut();
    }

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerMenu}>
                    <TouchableOpacity
                        style={styles.backDrawer}
                        onPress={() => props.navigation.closeDrawer()}
                    >
                        <Icon name="keyboard-backspace" style={styles.icons} color="#fff" />
                        <Text style={styles.textBack}>Voltar</Text>
                    </TouchableOpacity>
                    
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            {isUserLoaded && <View style={styles.footerDrawer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')} style={styles.contentExit}>
                    <Icon name="account-cog-outline" color="#000" style={styles.icons}/>
                    <Text style={styles.textExit}>
                        Editar Perfil
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => sair()}
                    style={styles.contentExit}>
                    <Icon name="exit-run" style={styles.icons} color="#000" />
                    <Text style={styles.textExit}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>}

        </View>
    );
}

export default CustomDrawerContent;