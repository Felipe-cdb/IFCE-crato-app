import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '15%',
        flexDirection: "column",
        alignItems: "center",
    },

    content: {
        width: '100%',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: '10%',

    },

    titleForm: {
        fontWeight: '400',
        fontSize: RFValue(30)
    },

    contenteForm: {
        width: '70%',
        height: 140,
        marginTop: '10%',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },

    inputLog: {
        width: '100%',
        height: 40,
        paddingLeft: 10,
        fontSize: RFPercentage(2),

        backgroundColor: '#D9D9D9',
        borderRadius: 8,
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
        right: 15,
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

    btnEntrar: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#379936',
        borderRadius: 25,
    },

    textBtn: {
        fontSize: RFPercentage(2.5),
    }

})

export default styles;