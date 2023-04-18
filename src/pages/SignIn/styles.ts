import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: RFPercentage(4),
    },

    content: {
        width: '100%',
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: RFPercentage(10),

    },

    titleForm: {
        fontWeight: '400',
        fontSize: RFValue(32)
    },

    contenteForm: {
        width: '80%',
        height: RFValue(136),
        marginTop: RFPercentage(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },

    inputLog: {
        width: '100%',
        fontSize: RFValue(14),
        padding: RFValue(8),

        backgroundColor: '#D9D9D9',
        borderRadius: RFValue(8),
    },

    contntInpuPass: {
        display: "flex",
        flexDirection: "row",

        alignItems: "center"
    },

    iconEye: {
        fontSize: RFPercentage(3)
    },

    viewPass: {
        position: "absolute",
        right: RFValue(8),
    },

    textLink: {
        fontSize: RFPercentage(2),
        textDecorationLine: "underline",
        color: '#0051FF',
    },

    btnGroup: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },

    textBtn: {
        fontSize: RFPercentage(2.5),
    }

})

export default styles;