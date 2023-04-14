import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: RFPercentage(4),
    },
    
    scrollContainer: {
        height: '100%',
    },

    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 30,
    },
    
    form: {
        width: '100%',
        height: '70%',
        marginTop: 20,
    },

    titleForm: {
        textAlign: "center",
        fontSize: RFValue(32),
        fontWeight: '700'
    },

    formGroup: {
        height: '95%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },

    inputGroupAll: {
        width: '80%',
    },

    butnGroup: {
        width: '90%',
        marginTop: 16,
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    butnCancelar: {
        backgroundColor: "#696969",
        padding: 10,
        borderRadius: 25
    },

    butnCadastrar: {
        backgroundColor: "#379936",
        padding: 10,
        borderRadius: 25
    },

    textBtn: {
        fontSize: RFValue(16),
        color: "#fff"
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

    titleValidation: {
        fontSize: RFValue(24),
        fontWeight: 'bold'
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
    }

});

export default styles;