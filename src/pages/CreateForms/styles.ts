import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: RFValue(8)
    },

    titlePageContainer: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    inputContainer: {
        padding: RFValue(20),
        height: RFPercentage(70),
    },

    titlePage: {
        fontSize: defaultStyleProperties.pageTitleFontSize,
        fontWeight: 'bold',
        marginVertical: RFValue(12),
        alignSelf: 'center',
        paddingHorizontal: RFValue(14),
    },

    iconInformation: {
        fontSize: RFValue(24),
    },

    dateContainer: {
        backgroundColor: '#E8E8E8',
        marginBottom: RFValue(7),
        padding: RFValue(16),
        borderRadius: RFValue(8)
    },

    HeadContainier: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: RFValue(10)
    },

    subtitle: {
        fontSize: defaultStyleProperties.titleFontSize,
        marginBottom: RFValue(5),
    },

    iconClosed: {
        fontSize: RFValue(20)
    },

    dateInput: {
        color: defaultStyleProperties.whiteColor,
        fontSize: 18,
        fontWeight: 'bold'
    },

    dateIntervalContainer: {
        marginVertical: RFValue(8)
    },

    dateIntervalText: {
        fontSize: defaultStyleProperties.titleFontSize,
        marginBottom: RFValue(5),
    },

    boldText: {
        fontWeight: 'bold',
    },

    iconContainer: {
        alignItems: "center",
        marginBottom: RFValue(24),
        paddingBottom: RFValue(16)
    },

    iconAddDate: {
        fontSize: RFValue(32),
        color: defaultStyleProperties.greenColor,
    },

    actionButtonContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingTop: RFValue(16),
        paddingHorizontal: RFValue(24)
    },

    btnText: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor,
        fontWeight: 'bold'
    }

});

export default styles;