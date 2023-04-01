import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    linkView: {
        width: '90%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
    },

    linkText: {
        fontSize: RFValue(16),
        color: '#0051FF',
        marginRight: 8
    },

    removeLink: {},

    iconTrash: {
        fontSize: RFValue(16)
    },
});

export default styles;