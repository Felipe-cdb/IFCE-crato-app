import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tooltipContainer: {
        backgroundColor: defaultStyleProperties.whiteColor,
        borderRadius: 5,
        padding: 10,
        minWidth: 100,
    },
    tooltipText: {
        color: defaultStyleProperties.grayColor,
        fontSize: 14,
    },

})

export default styles;