import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        width: '100%',
        marginVertical: 16,
        display: "flex",
        alignItems: "center"
    },

    title: {
        textAlign: "center",
        fontSize: RFValue(24),
        fontWeight: 'bold',
        marginBottom: 16
    },

    content: {
        width: '90%'
    },

    clipTxt: {
        fontSize: RFValue(16)
    },

    clipBtn: {
        marginTop: 8,
        paddingHorizontal: 50,
        paddingVertical: 30,
        borderWidth: 2,
        borderColor: "#D9D9D9",
        borderRadius: 16,

        display: "flex",
        alignItems: "center",
        alignSelf: "center"
    },

    clip: {
        fontSize: RFValue(32)
    },

    containeLink: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    inputLink: {
        width: '86%',
        marginRight: '2%'
    },

    btnPlus: {
        width: '12%',
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#275D8E',
        paddingHorizontal: RFPercentage(1.5),
        paddingVertical: RFPercentage(1),
        borderRadius: 16,
        marginTop: RFValue(24) 
    },

    plus: {
        fontSize: RFValue(16)
    },

    butnGroup: {
        width: '90%',
        marginTop: 16,
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    butnCancelar: {
        backgroundColor: "#696969",
        padding: 10,
        borderRadius: 25
    },

    butnCriar: {
        backgroundColor: "#379936",
        padding: 10,
        borderRadius: 25
    },

    textBtn: {
        fontSize: RFValue(16),
        color: "#fff"
    }
});

export default styles;