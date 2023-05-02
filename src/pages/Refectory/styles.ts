import { StyleSheet } from "react-native";
import { defaultStyleProperties } from '../../base/styles'
import { RFValue } from "react-native-responsive-fontsize";

const { 
    blueColor,
    defaultPaddingBottom,
    defaultPaddingTop,
    defaultPadding,
    titleFontSize
} = defaultStyleProperties

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: defaultPadding
    },

    titlePage: {
        fontSize: defaultStyleProperties.pageTitleFontSize,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    //-------------------------Data do Formulário-------------------------

    dateForms: {
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 20
    },

    statusForms: {
        alignSelf: "center",
        fontSize: 16,
        paddingTop: defaultPaddingTop,
        paddingBottom: defaultPaddingBottom
    },

    dateFormsReference: {
        fontSize: 16,
        padding: 5,
    },

    dateFormsClosing: {
        fontSize: 16,
        padding: 5,
        
    },


    //-------------------------CARDÁPIO-------------------------
    cardapio: {
        width: '100%',
        paddingTop: defaultPaddingTop,
        paddingBottom: defaultPaddingBottom
    },

    title: {
        fontSize: titleFontSize,
        fontWeight: 'bold',
        paddingBottom: defaultPaddingBottom
    },

    subtitle: {
        fontWeight: 'normal',
        fontSize: 16,
        alignSelf: "flex-start"
    },

    menuContainer: {
        paddingTop: defaultPaddingTop,
        paddingBottom: defaultPaddingBottom,
        paddingHorizontal: "22%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    menuIcon: {
        fontSize: 20
    },

    editMenuIconContainer: {
        backgroundColor: blueColor,
        padding: RFValue(10),
        borderRadius: RFValue(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
    },

    editMenuIcon: {
        fontSize: 20
    },

    //-------------------------Opções do Dia-------------------------
    refectoryChoices: {
        width: '100%',
        alignItems: 'flex-start',
    },

    //-------------------------Botões-------------------------
    formButton: {
        paddingVertical: 10,
    },

    formTitle: {
        fontSize: 16,
        color: 'white',
        padding: 2
    },

    actionButtonContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: defaultPaddingTop
    },

    actionButtomTitle: {    
        fontSize: 16,
        color: 'white',
        fontWeight: "bold",
        paddingHorizontal: '10%'
    }

});

export default styles;