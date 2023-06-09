import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",

    },

    featherStyle: {
        fontSize: RFValue(24),
        marginLeft: RFValue(10),
        color: defaultStyleProperties.blackColor,
    },

    entypoStyle: {
        fontSize: RFValue(24),
        padding: 1,
        color: defaultStyleProperties.blackColor,
    },

    searchBar__unclicked: {
        padding: RFValue(8),
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: RFValue(8),
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: RFValue(18),
        marginLeft: RFValue(15),
        width: "90%",
    },
});

export default styles;