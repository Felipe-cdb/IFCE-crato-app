import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const InDevelopment = () => (
    <SafeAreaView style={styles.container}>
        <Text>Em desenvolvimeno</Text>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInDevelopment: {
        fontSize: RFValue(24)
    }
});

export default InDevelopment;
