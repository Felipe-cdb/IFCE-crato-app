import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },

    title: {
        fontWeight: "bold",
        fontSize: 16,
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
        backgroundColor: "#30942F",
        borderWidth: 1,
        borderColor: "#30942F",
    },
});

export default styles;