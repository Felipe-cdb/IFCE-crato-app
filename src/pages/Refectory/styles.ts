import { StyleSheet } from "react-native";
import { defaultStyleProperties } from '../../base/styles'
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const {
    blueColor,
    redColor,
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
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: RFValue(24)
    },

    statusForms: {
        alignSelf: "center",
        fontSize: RFValue(19),
        paddingTop: defaultPaddingTop,
        paddingBottom: defaultPaddingBottom
    },

    dateFormsReference: {
        fontSize: RFValue(19),
        padding: RFValue(6),
    },

    dateFormsClosing: {
        fontSize: RFValue(19),
        padding: RFValue(6),
    },

    redText: {
        color: redColor
    },

    //----------CARDÁPIO---------------
    menu: {
        width: '100%',
        paddingTop: defaultPaddingTop,
        paddingBottom: defaultPaddingBottom
    },

    title: {
        fontSize: RFValue(19),
        fontWeight: 'bold',
        paddingBottom: defaultPaddingBottom
    },

    subtitle: {
        fontWeight: 'normal',
        fontSize: RFValue(19),
        alignSelf: "flex-start"
    },

    menuContainer: {
        paddingTop: defaultPaddingTop,
        paddingBottom: defaultPaddingBottom,
        paddingHorizontal: RFPercentage(12),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: RFValue(12),
    },

    iconStyle: {
        fontSize: RFValue(26),
        marginLeft: RFValue(10),
        color: whiteColor
    },

    editMenuIconContainer: {
        backgroundColor: blueColor,
        padding: RFValue(10),
        borderRadius: RFValue(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    editMenuIcon: {
        fontSize: RFValue(24),
        color: whiteColor
    },

    //-------------Opções do Dia----------------
    refectoryChoices: {
        width: '100%',
        alignItems: 'flex-start',
    },

    //--------------Botões---------------------
    formButton: {
        paddingVertical: RFValue(12),
    },

    formTitle: {
        fontSize: RFValue(18),
        color: whiteColor,
        padding: RFValue(2)
    },

    actionButtonContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: defaultPaddingTop
    },

    actionButtomTitle: {
        fontSize: RFValue(18),
        color: whiteColor,
        fontWeight: "bold",
        paddingHorizontal: RFPercentage(4),
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