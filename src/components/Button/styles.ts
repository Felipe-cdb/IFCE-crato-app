import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    buttonStyles: {
        padding: RFValue(10),
        borderRadius: RFValue(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

});

export default styles;
