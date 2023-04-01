import React from 'react';
import { View, Text, ScrollView } from "react-native";

import Menu from "../../components/Menu";

import styles from "./styles";

function RefectoryForms() {

    return (
        <View style={styles.container}>
            <Menu />
            <ScrollView >
                <Text style={styles.titlePage}>Dados do Formulário</Text>
            </ScrollView>
        </View>
    )
}

export default RefectoryForms;