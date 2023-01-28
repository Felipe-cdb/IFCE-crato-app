import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerInpu: {
        width: '100%',
        marginVertical: 10
    },

    label: {
        fontSize: RFValue(16),
        marginBottom: 5
    },

    inputEntry: {
        width: '100%',
        height: 40,
        fontSize: RFValue(16),
        paddingLeft: 10,

        backgroundColor: '#D9D9D9',
        borderRadius: 8,

        justifyContent: "center"
    },
});

export default styles;