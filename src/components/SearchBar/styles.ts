import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Platform } from "react-native";
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
        fontSize: RFValue(16),
        marginLeft: RFValue(10),
        color: defaultStyleProperties.blackColor,
    },

    entypoStyle: {
        fontSize: RFValue(22),
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
        paddingRight: RFValue(16),
        flexDirection: "row",
        width: Platform.OS=='ios' ? "80%" : undefined,
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: RFValue(16),
        marginLeft: RFValue(15),
        width: "90%",
    },
});

export default styles;