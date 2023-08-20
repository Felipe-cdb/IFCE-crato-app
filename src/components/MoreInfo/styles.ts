import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

const styles = StyleSheet.create({
    viewModal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    contentModalInfo: {
        width: '100%',
        maxHeight: '85%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        borderRadius: 20
    },

    titleAndImage: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20,
    },

    titleModal: {
        fontSize: RFValue(17),
        marginBottom: 20,
        fontWeight: '700'
    },

    imageModal: {
        width: RFPercentage(38),
        height: RFPercentage(30),
        borderRadius: 16
    },

    contentsInfo: {
        fontSize: RFValue(15),
        textAlign: "justify",
        marginBottom: 15,
    },

    listaLinks: {
        marginBottom: 15,
    },

    textLink: {
        fontSize: RFPercentage(1.8),
        color: '#0051FF'
    },

    footerModal: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
    },

    containerBtnOk: {
        paddingRight: 10
    },


    textBtnOk: {
        fontSize: RFValue(12),
        fontWeight: '600',
        paddingHorizontal: RFValue(5),
        color: defaultStyleProperties.whiteColor
    },

    dataModal: {
        flexGrow: 1,
        paddingLeft: 10
    },
});

export default styles;