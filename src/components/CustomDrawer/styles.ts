import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },

    drawerMenu: {
        padding: 15,
        backgroundColor: defaultStyleProperties.greenColor,
        marginTop: -4
    },

    backDrawer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    icons: {
        fontSize: RFValue(24),
        marginRight: 15,
        color: defaultStyleProperties.blackColor
    },

    iconback: {
        fontSize: RFValue(30),
        marginRight: 15,
        color: defaultStyleProperties.whiteColor
    },

    textBack: {
        fontWeight: '700',
        fontSize: RFPercentage(3.5),
        color: defaultStyleProperties.whiteColor
    },

    footerDrawer: {
        paddingTop: 20,
        marginBottom: RFValue(30),

        borderTopWidth: 1.5,
        borderTopColor: defaultStyleProperties.greenColor
    },

    contentExit: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        marginLeft: RFValue(25),
    },

    textExit: {
        fontSize: RFValue(16)
    }
});

export default styles;