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
        fontWeight: '600',
        textAlign: "justify",
        marginBottom: RFValue(8),
    },

    containerBtn: {
        width: '90%',
        marginTop: RFValue(12),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    textBtn: {
        fontSize: RFValue(12),
        color: '#FFF',
        fontWeight: '700'
    }
});

export default styles;