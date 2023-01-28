import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";

function Menu(){

    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return(
        <View style={styles.containerMenu}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="menu" style={styles.iconsMenu} color="#fff" />
            </TouchableOpacity>
            <Image style={styles.logoMenu} source={require('../../assets/images/LogoMenu.png')} />
            <Icon name="bell" style={styles.iconsMenu} color="#fff" />
        </View>
    )
}

export default Menu;