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

    logoMenuContent: {
        width: RFValue(48),
        height: RFValue(48),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFF',
        borderRadius: RFPercentage(50),
    },

    logoMenu: {
        width: RFValue(24),
        height: RFValue(32),
    },

    iconsMenu: {
        fontSize: RFPercentage(4)
    },
});

export default styles;