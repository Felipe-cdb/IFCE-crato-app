import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

function LogoIF(){
    return(
        <View style={styles.containerLogo}>
            <Image style={styles.image} source={require('./../../assets/images/Logo.png')} />
            <Text style={styles.textDestaque}>INSTITUTO</Text>
            <Text style={styles.textDestaque}>FEDERAL</Text>
            <Text style={styles.textCe}>Ceará</Text>
        </View>
    )
}

export default LogoIF;