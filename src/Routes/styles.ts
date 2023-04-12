import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const stylesNavigation = StyleSheet.create({
    icons: {
        fontSize: RFValue(24),
    },
    fontDrawer: {
        width: RFPercentage(150),
        fontSize: RFValue(16),
        marginLeft: RFValue(-16)
    },
});

export default stylesNavigation;