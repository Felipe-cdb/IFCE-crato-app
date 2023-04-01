import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },

    titlePage: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center',
    },

    //-------------------------Data do Formulário-------------------------

    dateForms: {
        marginTop: 30,
    },

    statusForms: {
        alignSelf: "center",
        fontSize: 16,
        marginBottom: 20,
    },

    dateFormsReference: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 30,
    },

    dateFormsClosing: {
        fontSize: 16,
        marginLeft: 30,
    },


    //-------------------------CARDÁPIO-------------------------
    cardapio: {
        marginTop: 35,
        marginLeft: 30,
        paddingRight: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    subtitle: {
        fontWeight: 'normal',
        fontSize: 16,
    },

    row: {
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 20,
    },

    //-------------------------Opções do Dia-------------------------
    SelectOp: {
        marginTop: 25,
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginBottom: 40,
    },

    //-------------------------Botões-------------------------
    Buttons: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 15,
    },

    ButtonGR: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 40,
    },

});

export default styles;