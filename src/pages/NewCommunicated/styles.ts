import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    scrollContainer: {
        alignItems: "center",
        paddingTop: RFValue(16),
        paddingBottom: RFValue(32)
    },

    title: {
        fontSize: RFValue(24),
        fontWeight: 'bold',
        marginBottom: RFValue(16)
    },

    form: {
        width: '90%'
    },

    clipTxt: {
        fontSize: RFValue(16)
    },

    optionsImage: {
        width: '100%',
        marginTop: RFValue(8),

        display: "flex",
        alignItems: "center",
        alignSelf: "center",

        justifyContent: 'center',
        marginVertical: RFValue(8),
        overflow: 'hidden',
    },
    
    image: {
        width: '100%',

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around'
    },

    imageTrash: {
        width: '20%',
        alignItems: "center",
        fontSize: RFValue(32)
    },
    
    iconTrash: {
        fontSize: RFValue(24)
    },

    imagePreview: {
        flex: 1,
        width: '70%',
        minHeight: RFValue(200),
        maxHeight: RFValue(300),
        resizeMode: 'cover',
        borderWidth: RFValue(2),
        borderColor: "#D9D9D9",
        borderRadius: RFValue(16),
    },

    clipContainer: {
        width: '50%',
        paddingVertical: RFValue(30),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#D9D9D9",
        borderRadius: 16,
    },

    clipIcon: {
        fontSize: RFValue(32)
    },

    containeLink: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    inputLink: {
        width: '86%',
        marginRight: '2%'
    },

    btnPlus: {
        width: '12%',
        height: RFValue(40),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#275D8E',
        paddingHorizontal: RFPercentage(1.5),
        paddingVertical: RFPercentage(1),
        borderRadius: RFValue(16),
        marginTop: RFValue(24) 
    },

    plus: {
        fontSize: RFValue(16)
    },

    butnGroup: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    butnCancelar: {
        backgroundColor: "#696969",
        padding: 10,
        borderRadius: 25
    },

    butnCriar: {
        backgroundColor: "#379936",
        padding: 10,
        borderRadius: 25
    },

    textBtn: {
        fontSize: RFValue(16),
        color: "#fff"
    }
});

export default styles;