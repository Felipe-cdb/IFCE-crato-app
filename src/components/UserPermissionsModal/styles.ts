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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        borderRadius: 16,
        backgroundColor: defaultStyleProperties.blueColor,
    },

    closeIcon: {
        alignSelf: "flex-end",
        fontSize: 24,
        fontWeight: "bold",
    },

    optionContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    nameContainer: {
        marginBottom: RFValue(10)
    },

    nameText: {
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.titleFontSize),
        fontWeight: "bold"
    },

    typeText: {
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.subTitleFontSize),
    },

    iconStyle: {
        fontSize: RFValue(14),
        color: defaultStyleProperties.whiteColor
    },

    identificationContainerStyle: {
        marginBottom: RFValue(10)
    },

    identificationStyle: {
        marginTop: RFValue(7),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    identificationTextStyle: {
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.subTitleFontSize),
        marginLeft: RFValue(10)
    },

    emailStyle: {
        marginTop: RFValue(7),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    emailTextStyle: {
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.subTitleFontSize),
        marginLeft: RFValue(10)
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: defaultStyleProperties.whiteColor,
        borderColor: defaultStyleProperties.grayColor
    },

    optionText: {
        marginLeft: 15,
        fontSize: 14,
        fontWeight: "bold",
        color: defaultStyleProperties.whiteColor
    },

    checkedBox: {
        color: defaultStyleProperties.greenColor,
        fontSize: RFValue(15)
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