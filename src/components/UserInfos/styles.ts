import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyleProperties.blueColor,
        width: '80%',
        alignSelf: "center",
        marginTop: RFValue(12),
        padding: RFValue(8),
        borderRadius: RFValue(8)
    },
    nameContainer: {
        marginBottom: RFValue(10)
    },

    nameText: {
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.titleFontSize),
        fontWeight: "bold"
    },

    typeText: {
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.subTitleFontSize),
    },

    identificationContainerStyle: {
        marginBottom: RFValue(10)
    },

    identificationStyle: { 
        marginTop: RFValue(7),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
     },

    identificationTextStyle: { 
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.subTitleFontSize),
        marginLeft: RFValue(10)
     },

    emailStyle: {
        marginTop: RFValue(7),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    emailTextStyle: {
        color: defaultStyleProperties.whiteColor,
        fontSize: RFValue(defaultStyleProperties.subTitleFontSize),
        marginLeft: RFValue(10)
    }
})

export default styles