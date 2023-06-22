import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({

    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    view: {
        width: '100%',
        borderTopRightRadius: RFValue(32),
        borderTopLeftRadius: RFValue(32),
        paddingBottom: RFValue(32),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: defaultStyleProperties.whiteColor,
    },

    closeFlash: {
        width: '20%',
        borderBottomWidth: 2,
        borderBottomColor: defaultStyleProperties.grayColor,
        marginTop: RFValue(8),
        marginBottom: RFValue(24),
    },

    btnGroupModal: {
        maxWidth: '80%',
    },

    btn: {
        padding: RFValue(8),
        flexDirection: 'row',
        alignItems: "center"
    },

    txtBtn: {
        marginLeft: RFValue(8),
        fontSize: RFValue(16)
    },

    circleIcon: {
        borderWidth: 1,
        borderColor: defaultStyleProperties.grayColor,
        borderRadius: RFValue(16),
        alignItems: "center",
        justifyContent: "center",
        width: RFValue(32),
        height: RFValue(32),
    },

    iconBtn: {
        fontSize: RFValue(24),
        color: defaultStyleProperties.grayColor
    }

});

export default styles;