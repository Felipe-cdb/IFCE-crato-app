import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({

    comunicadoContainer: {
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingTop: 10
    },

    apagarComunicado: {
        position: "absolute",
        right: 5,
        top: 2
    },

    apagarIcon: {
        width: RFPercentage(7),
        fontSize: RFPercentage(4),
        textAlign: 'right',
        color: defaultStyleProperties.blackColor
    },

    textContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
    },

    textComunicado: {
        width: '100%',
        fontSize: RFValue(14),
        marginBottom: 15,
        textAlign: "justify"
    },

    title: {
        width: '90%',
        textAlign: "center",
        fontWeight: '700',
        fontSize: RFValue(15),
        marginBottom: 10,
    },

    footerCard: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        paddingBottom: 3,
    },

    date: {
        flex: 1,
        textAlign: "right"
    },

    btnMais: {
        width: '65%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    iconMais: {
        fontSize: RFValue(20),
        color: '#0051FF'
    },

    maisText: {
        marginLeft: 5,
        fontSize: RFValue(16),
        color: '#0051FF'
    },

});

export default styles;