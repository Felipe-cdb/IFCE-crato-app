import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },

    filtros: {
        width: '90%',

        marginTop: 15,

        borderBottomWidth: 1,
        borderBottomColor: '#19882C',

        paddingBottom: 18
    },

    contentComunicados: {
        width: '90%',
        flex: 1,
        flexDirection: "column",
    },

    cardComponent: {
        marginBottom: RFValue(16),
        paddingTop: RFValue(16),
        borderTopWidth: 1,
        borderTopColor: '#19882C'
    }
});

export default styles;