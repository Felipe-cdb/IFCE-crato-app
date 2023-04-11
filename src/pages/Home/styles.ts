import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    filtros: {
        width: '90%',
        marginTop: RFValue(16),
        borderBottomWidth: 1,
        borderBottomColor: '#19882C',
        paddingBottom: RFValue(8),
    },

    contentComunicados: {
        height: '100%',
        width: '90%'
    },

    lineSeparator: {
        width: '100%',
        borderTopWidth: 1.5,
        borderTopColor: '#19882C'
    },

    cardComponent: {
        marginBottom: RFValue(8),
        paddingTop: RFValue(8)
    }
});

export default styles;