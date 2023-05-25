import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    mainButton: {
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    backButton: {
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    extraButton: {
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    buttonText: {
        color: defaultStyleProperties.whiteColor,
    },
    iconStyles: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
