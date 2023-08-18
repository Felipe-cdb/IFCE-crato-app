import { StyleSheet } from "react-native";
import { defaultStyleProperties } from '../../base/styles'
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const {
    whiteColor,
    greenColor,
    defaultPaddingBottom,
    defaultPaddingTop,
    defaultPadding,
    pageTitleFontSize
} = defaultStyleProperties

const styles = StyleSheet.create({

    scrollViewContainer: {
        height: '100%'
    },

    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: defaultPadding
    },

    titlePage: {
        fontSize: pageTitleFontSize,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    //--------------Data do Formulário------------

    dateForms: {
        width: "100%",
        alignItems: "flex-start",
        paddingTop: RFValue(24)
    },

    dateFormsFont: {
        fontSize: RFValue(16),
        padding: RFValue(5),
    },

    //-------------Opções do Dia----------------
    refectoryChoices: {
        width: '100%',
        alignItems: 'flex-start',
        paddingTop: RFValue(20),
    },

    //----------Botão CARDÁPIO---------------
    menuContainer: {
        width: '100%',
        paddingTop: defaultPaddingTop,
        paddingBottom: defaultPaddingBottom,
        paddingHorizontal: RFPercentage(10),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: RFValue(12),
    },

    iconMenu: {
        fontSize: RFValue(26),
        marginLeft: RFValue(10),
        color: whiteColor
    },

    editMenuIcon: {
        fontSize: RFValue(24),
        color: whiteColor
    },

    //--------------Botão enviar---------------------

    actionButtomTitle: {
        fontSize: RFValue(16),
        color: whiteColor,
        fontWeight: "bold",
        paddingHorizontal: RFPercentage(2),
    },

    //-------------------------EmptyRefectory-------------------------
    containerEmpty: {
        height: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    iconEmpty: {
        fontSize: RFValue(80),
        color: greenColor,
        opacity: 0.6,
    },

    textEmpty: {
        fontSize: RFValue(16),
        fontWeight: '700',
        color: greenColor,
        opacity: 0.6,

    },

    //-------------------------RefectoryAlreadyAnswered---------------------
    containerAlreadyAnswered: {
        height: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingVertical: RFPercentage(8),
        marginBottom: RFValue(30),
    },

    iconAlreadyAnswered: {
        fontSize: RFValue(45),
        color: greenColor,
        opacity: 0.6,
    },

    textAlreadyAnswered: {
        fontSize: RFValue(16),
        fontWeight: '500',
        textAlign: 'center',
        color: greenColor,
        opacity: 0.6,

    }
});

export default styles;