import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },

    titlePageContainer: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    titlePage: {
        fontSize: defaultStyleProperties.pageTitleFontSize,
        fontWeight: 'bold',
        marginVertical: RFValue(18),
        alignSelf: 'center',
        paddingHorizontal: RFValue(20),
    },

    listStyle: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    buttonContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: RFValue(20)
    },

    buttonTitle: {
        fontSize: RFValue(18),
        color: 'white',
        fontWeight: "bold"
    },

    buttonStyle: {
        fontSize: RFValue(20),
        marginLeft: RFValue(6),
        color: defaultStyleProperties.whiteColor
    },

});

export default styles;