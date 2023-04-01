import React from 'react';
import { View, Text, ScrollView } from "react-native";

import Menu from "../../components/Menu";

import styles from "./styles";

function RefectoryReport() {

    return (
        <View style={styles.container}>
            <Menu />
            <ScrollView >
                <Text style={styles.titlePage}>Relatório do Refeitório</Text>
            </ScrollView>
        </View>
    )
}

export default RefectoryReport;