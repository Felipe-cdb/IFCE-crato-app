import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    filtros: {
        width: '90%',
        marginTop: RFValue(16),
        borderBottomWidth: 1,
        borderBottomColor: defaultStyleProperties.greenColor,
        paddingBottom: RFValue(8),
    },

    scrollFiltros: {
        flexGrow: 1,
        justifyContent: "space-evenly"
    },

    contentComunicados: {
        flex: 1,
        height: '100%',
        width: '90%'
    },

    lineSeparator: {
        width: '100%',
        borderTopWidth: 1.5,
        borderTopColor: defaultStyleProperties.greenColor,
    },

    cardComponent: {
        marginBottom: RFValue(8),
        paddingTop: RFValue(8)
    }
});

export default styles;