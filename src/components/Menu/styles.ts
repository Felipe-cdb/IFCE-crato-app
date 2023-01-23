import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerMenu: {
        width: '100%',

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: '10%',
        paddingBottom: 10,

        backgroundColor: '#19882C'
    },

    logoMenu: {
        width: RFValue(56),
        height: RFValue(56),
    },

    iconsMenu: {
        fontSize: RFPercentage(4)
    },
});

export default styles;