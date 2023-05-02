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
        marginVertical: 15,
        alignSelf: 'center',
        paddingHorizontal: RFValue(20),
    },

    buttonTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: "bold"
    },

});

export default styles;