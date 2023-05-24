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
});

export default styles;