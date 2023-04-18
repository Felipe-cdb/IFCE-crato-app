import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },

    drawerMenu: {
        padding: 15,
        backgroundColor: '#19882C',
        marginTop: -4
    },

    backDrawer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    icons: {
        fontSize: RFValue(24),
        marginRight: 15
    },
    
    textBack: {
        fontWeight: '700',
        fontSize: RFPercentage(3.5),
        color: '#fff'
    },

    footerDrawer: {
        paddingTop: 20,
        marginBottom: RFValue(30),

        borderTopWidth: 1.5,
        borderTopColor: '#19882C'
    },

    contentExit: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        marginLeft: RFValue(25),
    },

    textExit: {
        fontSize: RFValue(16)
    }
});

export default styles;