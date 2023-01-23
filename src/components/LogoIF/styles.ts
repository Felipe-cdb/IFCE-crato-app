import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerLogo: {
        alignItems: "center",
        paddingTop: 10,
    },

    image: {
        width: 44,
        height: 59,
    },

    textDestaque: {
        fontSize: RFValue(15),
        fontWeight: '700'
    },

    textCe: {
        fontSize: RFPercentage(2)
    },
});

export default styles;