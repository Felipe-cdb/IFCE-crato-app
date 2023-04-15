import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerLogo: {
        width: '100%',
        alignItems: "center",
        paddingTop: 10,
    },
    
    contenteLogo: {
        width: "30%",
        alignItems: "center",
    },

    image: {
        width: 44,
        height: 59,
    },

    textDestaque: {
        fontSize: RFValue(15),
        fontWeight: '700',
        textAlign: "center"
    },

    textCe: {
        fontSize: RFPercentage(2),
        marginTop: RFValue(4),
        borderTopWidth: 1,
        borderTopColor: '#379936',
        textAlign: 'center'
    },

});

export default styles;