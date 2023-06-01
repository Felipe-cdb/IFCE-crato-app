import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },

    flatStyle: {
        width: '100%'
    },

    buttonBack: {
        marginBottom: RFValue(30),
        marginTop: RFValue(30)
    },

    textbuttonBack: {
        color: defaultStyleProperties.whiteColor
    }

});

export default styles;