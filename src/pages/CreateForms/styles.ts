import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";
import { RFValue } from "react-native-responsive-fontsize";

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
        padding: 20,
        height: '70%',
    },


    titlePage: {
        fontSize: defaultStyleProperties.pageTitleFontSize,
        fontWeight: 'bold',
        marginVertical: 10,
        alignSelf: 'center',
        paddingHorizontal: RFValue(10),
    },

    dateContainer: {
        backgroundColor: '#E8E8E8',
        marginBottom: RFValue(7),
        padding: RFValue(16),
        borderRadius: 8
    },

    subtitle: {
        fontSize: defaultStyleProperties.titleFontSize,
        marginBottom: RFValue(5),
    },

    input: {
        height: RFValue(40),
        width: RFValue(180),
        borderRadius: RFValue(10),
        backgroundColor: '#D9D9D9',
        padding: RFValue(10),
        borderWidth: 1
    },

    dateIntervalContainer: {
        marginVertical: RFValue(8)
    },

    dateIntervalText: {
        fontSize: defaultStyleProperties.titleFontSize,
        marginBottom: RFValue(5),
    },

    iconContainer: {
        alignItems: "center",
        marginBottom: 20,
        paddingBottom: RFValue(16)
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
        color: '#FFF',
        fontWeight: 'bold'
    }

});

export default styles;