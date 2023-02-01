import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewModal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    contentModalInfo: {
        width: '90%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        borderRadius: 25,
        backgroundColor: '#FFF',
    },

    contentsInfo: {
        fontSize: RFValue(20),
        textAlign: "justify",
        marginBottom: 15,
    },

    containerBtn: {
        width: '90%',
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    btnOk: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#379936',
        borderRadius: 16,
    },

    btnCancel: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#C80E0E',
        borderRadius: 16,
    },

    textBtn: {
        fontSize: RFValue(16),
        color: '#FFF',
        fontWeight: '400'
    }
});

export default styles;