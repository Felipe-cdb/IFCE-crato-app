import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "space-between",
        // backgroundColor: 'blue'
    },
    
    titlePageContainer: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    inputContainer: {
        padding: 20,
        height: '70%'
    },


    titlePage: {
        fontSize: defaultStyleProperties.pageTitleFontSize,
        fontWeight: 'bold',
        marginVertical: 10,
        alignSelf: 'center',
        paddingHorizontal: RFValue(10),
    },

    dateContainer: {
        marginBottom: RFValue(7)
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
        marginVertical: RFValue(15)
    },

    dateIntervalText: {
        fontSize: defaultStyleProperties.titleFontSize,
        marginBottom: RFValue(5),
    },

    iconContainer: {
        alignItems: "center",
        marginBottom: 20,
    },

    actionButtonContainer: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: 'row',
        // position: 'relative',
        // // flex: 0.1,
        // left: 0,
        // right: 0,
        // top: '100%'
    },

});

export default styles;