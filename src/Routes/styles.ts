import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { defaultStyleProperties } from "../base/styles";

const stylesNavigation = StyleSheet.create({
    icons: {
        fontSize: RFValue(24),
        color: defaultStyleProperties.blackColor,
    },
    fontDrawer: {
        width: RFPercentage(150),
        fontSize: RFValue(16),
        marginLeft: RFValue(-16)
    },
});

export default stylesNavigation;