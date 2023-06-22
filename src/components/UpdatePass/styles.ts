import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({

    inputLog: {
        width: '100%',
        fontSize: RFValue(14),
        padding: RFValue(8),

        backgroundColor: '#D9D9D9',
        borderRadius: RFValue(8),
    },

    label: {
        fontSize: RFValue(16),
        marginBottom: RFValue(8)
    },

    contntInpuPass: {
        display: "flex",
        flexDirection: "row",

        alignItems: "center"
    },

    viewModal: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: RFValue(8),
        borderRadius: RFValue(8),
        backgroundColor: defaultStyleProperties.whiteColor,
    },

    contentModalInfo: {
        width: '90%',
        display: "flex",
        flexDirection: "column",
    },

    footer: {
        width: '100%',
        marginTop: RFValue(28),
        marginBottom: RFValue(8),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    textBtn: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor,
        fontWeight: 'bold'
    },
});

export default styles;