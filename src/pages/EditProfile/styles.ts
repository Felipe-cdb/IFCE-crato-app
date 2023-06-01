import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: RFValue(32)
    },

    content: {
        width: '85%',
        alignItems: "center"
    },

    contenteImageProfile: {
        borderRadius: RFPercentage(50),
        backgroundColor: '#D9D9D9',
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: '#D9D9D9'
    },

    imageProfile: {
        width: RFValue(96),
        height: RFValue(96),
        borderRadius: RFPercentage(50)
    },

    iconProfile: {
        fontSize: RFValue(96),
        color: defaultStyleProperties.blackColor
    },

    //Esse estilo não está sendo aplicado ao botão,
    //segue o newPassBtn original comentado e abaixo dele o adptado para solução temporaria usando uma view
    // newPassBtn: {
    //     width: '70%',
    //     marginTop: 10,
    //     padding: 10,
    // },

    newPassBtn: {
        width: '100%',
        marginTop: RFValue(16),
    },

    containerBtnPass: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    textResetPass: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor
    },

    iconResetPass: {
        fontSize: RFValue(28),
        color: defaultStyleProperties.whiteColor
    },

    footer: {
        width: '90%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: RFPercentage(20)
    },

    footerBtn: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor,
        fontWeight: 'bold'
    },

});

export default styles;