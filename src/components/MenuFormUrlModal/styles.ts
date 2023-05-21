import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

export default StyleSheet.create({
    viewModal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    contentModalInfo: {
        width: '90%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        borderRadius: 16,
        backgroundColor: defaultStyleProperties.whiteColor,
    },

    inputMenu: {
        width: '100%'
    },

    closeIcon: {
        alignSelf: "flex-end",
        fontSize: 24,
        fontWeight: "bold"
    },

    urlInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },

    contentsInfo: {
        fontSize: RFValue(18),
        textAlign: "center",
        marginBottom: 15,
        fontWeight: "bold"
    },

    containerBtn: {
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        width: '50%'
    },

    btnOk: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: defaultStyleProperties.greenColor,
        borderRadius: 10,
        width: '100%'
    },

    textBtn: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor,
        fontWeight: '400',
        alignSelf: "center"
    }
});