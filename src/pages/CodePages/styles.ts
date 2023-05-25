import  { RFValue, RFPercentage }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: RFPercentage(4),
    },
    // Validation Code
    containerBack: {
        width: '100%',
        paddingVertical: RFValue(8)
    },

    iconBack: {
        fontSize: RFValue(32),
        color: '#000'
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
        fontSize: RFValue(24),
        fontWeight: 'bold'
    },

    iconInformation: {
        fontSize: RFValue(24),
        marginLeft: 3,
        color: '#000'
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
        fontSize: RFValue(24),
        fontWeight: 'bold'
    },
    
    textSucess: {
        width: '87%',
        marginTop: RFValue(8),
        fontSize: RFValue(16)
    },

    btnContinue: {
        borderWidth: 2,
        marginTop: RFValue(40),
        paddingVertical: RFValue(16),
        borderColor: '#696969',
        width: '100%',
        alignSelf: "center",
        alignItems: "center",
        borderRadius: RFValue(8)
    },

    textContinue: {
        fontSize: RFValue(16),
        fontWeight: 'bold'
    }
});

export default styles;