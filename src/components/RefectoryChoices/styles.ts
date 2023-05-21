import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start"
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 25,
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    optionText: {
        marginLeft: 15,
        fontSize: 14,
        fontWeight: "bold"
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 25,
    },
    checkedBox: {
        width: 10,
        height: 10,
        backgroundColor: defaultStyleProperties.greenColor,
        borderWidth: 1,
        borderColor: defaultStyleProperties.greenColor,
    },
});

export default styles;