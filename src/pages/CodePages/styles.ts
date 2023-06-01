import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: RFPercentage(4),
        paddingHorizontal: RFValue(16),
    },
    // Validation Code
    containerBack: {
        width: '100%',
        paddingVertical: RFValue(10)
    },

    iconBack: {
        marginTop: RFValue(16),
        fontSize: RFValue(32),
        color: defaultStyleProperties.blackColor
    },

    contentValidation: {
        marginTop: RFValue(56)
    },

    titleValidationContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    titleValidation: {
        fontSize: defaultStyleProperties.titleFontSize,
        fontWeight: 'bold'
    },

    iconInformation: {
        fontSize: RFValue(24),
        marginLeft: RFValue(5),
        color: defaultStyleProperties.blackColor
    },

    infosValidation: {
        marginTop: RFValue(32)
    },

    infoText: {
        fontSize: RFValue(16)
    },

    infoMail: {
        fontSize: RFValue(16),
        fontWeight: 'bold'
    },

    contentCode: {
        marginTop: RFValue(16)
    },

    optionsCode: {
        marginTop: RFValue(24),
        alignItems: 'center'
    },

    btnNewCode: {
        marginTop: RFValue(16),
    },

    textBtnCode: {
        fontSize: RFValue(16),
        color: "#407CFF",
        textDecorationLine: "underline",
    },

    // Sucess Validation
    containerSucess: {
        flex: 1,
        marginTop: '15%',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },

    contetSucess: {
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: '30%'
    },

    titleSucess: {
        fontSize: defaultStyleProperties.pageTitleFontSize,
        fontWeight: 'bold'
    },

    textSucess: {
        width: '87%',
        marginTop: RFValue(10),
        fontSize: RFValue(16)
    },

    btnContinue: {
        borderWidth: RFValue(4),
        marginTop: RFValue(40),
        paddingVertical: RFValue(16),
        borderColor: defaultStyleProperties.grayColor,
        width: '100%',
        alignSelf: "center",
        alignItems: "center",
        borderRadius: RFValue(10)
    },

    textContinue: {
        fontSize: RFValue(16),
        fontWeight: 'bold'
    }
});

export default styles;