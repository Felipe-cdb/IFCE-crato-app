import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start"
    },

    title: {
        fontWeight: "bold",
        fontSize: RFValue(19),
        marginBottom: RFValue(30),
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: RFValue(24),
    },
    optionText: {
        marginLeft: RFValue(18),
        fontSize: RFValue(16),
        fontWeight: "bold"
    },
    checkbox: {
        width: RFValue(24),
        height: RFValue(24),
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: RFValue(30),
    },

    checkIcon: {
        fontSize: RFValue(18),
        color: defaultStyleProperties.greenColor,
    },

});

export default styles;