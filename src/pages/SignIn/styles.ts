import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: RFPercentage(4),
    },

    content: {
        width: '100%',
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: RFPercentage(10),

    },

    titleForm: {
        fontWeight: '400',
        fontSize: RFValue(32)
    },

    contenteForm: {
        width: '80%',
        height: RFValue(136),
        marginTop: RFPercentage(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },

    inputLog: {
        width: '100%',
        fontSize: RFValue(14),
        padding: RFValue(8),

        backgroundColor: '#D9D9D9',
        borderRadius: RFValue(8),
    },

    contntInpuPass: {
        display: "flex",
        flexDirection: "row",

        alignItems: "center"
    },

    iconEye: {
        fontSize: RFPercentage(3),
        color: defaultStyleProperties.blackColor
    },

    viewPass: {
        position: "absolute",
        right: RFValue(8),
    },

    textLink: {
        fontSize: RFPercentage(2),
        textDecorationLine: "underline",
        color: '#0051FF',
    },

    btnGroup: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },

    textBtn: {
        fontSize: RFPercentage(2.5),
        color: defaultStyleProperties.whiteColor
    },

    sigUpBtn: {
        marginTop: 16
    },

    // ------------- Screen Reset PassWord ------------ //
    containerBack: {
        width: '100%',
        paddingVertical: RFValue(8)
    },

    iconBack: {
        fontSize: RFValue(32),
        color: defaultStyleProperties.blackColor
    },

    contentResentMail: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        paddingBottom: RFValue(16)
    },

    containerTitle: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    iconInformations: {
        fontSize: RFValue(20),
        paddingTop: RFValue(5),
        marginLeft: 3,
        color: defaultStyleProperties.blackColor
    },

    titleValidation: {
        fontSize: RFValue(24),
        fontWeight: 'bold',
    },

    titleIconValidation: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
    },

    containerCodeValidation: {
        width: '100%',
        alignItems: "center",
        marginTop: RFValue(8)
    },

    codeInformtions: {
        width: '100%',
        textAlign: 'left',
        fontSize: RFValue(16),
        marginBottom: RFValue(8)
    },

    btnNewCode: {
        marginTop: RFValue(16),
    },

    passWordContainer: {
        marginTop: RFValue(24)
    },

    textBtnCode: {
        fontSize: RFValue(16),
        color: "#407CFF",
        textDecorationLine: "underline",
    },

    btnText: {
        fontSize: RFValue(16),
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export default styles;