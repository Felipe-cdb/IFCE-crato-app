import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btnFiltro: {
        borderWidth: 1,
        borderColor: '#77DD77',
        borderRadius: 15,

        paddingHorizontal: 6,
        paddingVertical: 3
    },
    
    labelFiltro: {
        fontSize: RFValue(16),
        color: '#696969'
    },
});

export default styles;