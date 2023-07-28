import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    containerInput: {
        width: '100%',
        marginVertical: RFValue(8)
    },

    label: {
        fontSize: RFValue(16),
        marginBottom: RFValue(8)
    },

    mandatoryInput: {
        color: defaultStyleProperties.redColor
    },

    inputEntry: {
        width: '100%',
        height: RFValue(40),
        fontSize: RFValue(16),
        padding: RFValue(10),

        backgroundColor: '#D9D9D9',
        borderRadius: RFValue(8),

        justifyContent: "center"
    },

    inputPass: {
        alignItems: "center"
    },

    inputEmail:{
        fontSize: RFValue(14)
    },

    textErr: {
        color: defaultStyleProperties.redColor
    },

    iconEye: {
        fontSize: RFPercentage(3),
        color: defaultStyleProperties.blackColor
    },

    viewPass: {
        position: "absolute",
        right: RFValue(8),
        top: RFValue(8)
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    optionsGroup: {
        width: '100%',
        marginVertical: RFValue(16),
        backgroundColor: "#D9D9D9",
        position: 'absolute',
        zIndex: 1,
        top: 55
    },

    optionsItem: {
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: ''                            
    },

    optionsText: {
        fontSize: RFValue(16)
    }
});

export default styles;