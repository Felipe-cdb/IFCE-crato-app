import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

function LogoIF(){
    return(
        <View style={styles.containerLogo}>
            <View style={styles.contenteLogo}>
                <Image style={styles.image} source={require('./../../assets/images/Logo.png')} />
                <Text style={styles.textDestaque}>INSTITUTO FEDERAL</Text>
                <Text style={styles.textCe}>Campus Crato</Text>

                {/* <View style={styles.campus}>
                    <Text style={styles.campusText}>Campus Crato</Text>
                </View> */}
            </View>
        </View>
    )
}

export default LogoIF;