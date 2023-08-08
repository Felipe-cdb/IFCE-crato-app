import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

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

    imageTooltipContainer: {
        alignItems: "center",
        justifyContent: 'flex-start',
        flexDirection: "row"
    },

    tooltipIcon: {
        padding: RFValue(7),
        fontSize: RFValue(16),
        color: defaultStyleProperties.redColor
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
        fontSize: RFValue(24),
        color: defaultStyleProperties.blackColor
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
        borderRadius: RFValue(18),
    },

    clipIcon: {
        fontSize: RFValue(32),
        color: defaultStyleProperties.blackColor
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
        backgroundColor: defaultStyleProperties.blueColor,
        paddingHorizontal: RFPercentage(1.5),
        paddingVertical: RFPercentage(1),
        borderRadius: RFValue(16),
        marginTop: RFValue(24)
    },

    plus: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor
    },

    butnGroup: {
        width: '100%',
        paddingHorizontal: RFValue(28),
        paddingTop: RFValue(28),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    butnCancelar: {
        backgroundColor: defaultStyleProperties.grayColor,
        padding: RFValue(12),
        borderRadius: RFValue(26)
    },

    butnCriar: {
        backgroundColor: defaultStyleProperties.greenColor,
        padding: RFValue(12),
        borderRadius: RFValue(26)
    },

    textBtn: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor
    }
});

export default styles;