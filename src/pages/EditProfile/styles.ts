import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

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
        color: '#000'
    },

    newPassBtn: {
        width: '70%',
        marginTop: RFValue(24),
        padding: 10,
    },

    containerBtnPass: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    textResetPass: {
        fontSize: RFValue(16),
        color: '#FFF'
    },

    iconResetPass : {
        fontSize: RFValue(22),
        color: '#FFF'
    },

    footer: {
        width: '90%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: RFPercentage(20)
    },

    textBtnCacel: {
        fontSize: RFValue(16),
        color: '#FFF',
        fontWeight: 'bold'
    },

    textBtnsave: {
        fontSize: RFValue(16),
        color: '#FFF',
        fontWeight: 'bold'
    }
});

export default styles;