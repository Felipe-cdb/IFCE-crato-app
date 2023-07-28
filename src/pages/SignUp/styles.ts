import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Dimensions } from "react-native";
import { defaultStyleProperties } from "../../base/styles";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const SLIDER_HEIGHT = Dimensions.get('window').height
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.7)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: RFPercentage(8),
    },

    scrollContainer: {
        height: '100%',
    },

    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 30,
    },

    form: {
        width: '100%',
        height: '70%',
        marginTop: 20,
    },

    titleForm: {
        textAlign: "center",
        fontSize: RFValue(32),
        fontWeight: '700'
    },

    formGroup: {
        height: '95%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },

    inputGroupAll: {
        width: '85%',
    },

    butnGroup: {
        width: '90%',
        marginTop: 16,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    textBtn: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor
    },

    // optionsImage: {
    //     width: '100%',
    //     marginTop: RFValue(8),

    //     display: "flex",
    //     alignItems: "center",
    //     alignSelf: "center",

    //     justifyContent: 'center',
    //     marginVertical: RFValue(8),
    //     overflow: 'hidden'
    // },

    // image: {
    //     width: ITEM_WIDTH - (0.60 * ITEM_WIDTH),
    //     height: ITEM_WIDTH - (0.60 * ITEM_WIDTH),
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: 'space-around',
    //     borderRadius: 100,
    // },

    // imageTrash: {
    //     width: '20%',
    //     alignItems: "center",
    //     fontSize: RFValue(32)
    // },

    // iconTrash: {
    //     fontSize: RFValue(24),
    //     color: defaultStyleProperties.blackColor
    // },

    // imagePreview: {
    //     flex: 1,
    //     minHeight: RFValue(200),
    //     maxHeight: RFValue(300),
    //     resizeMode: 'cover',
    //     borderWidth: RFValue(2),
    //     borderColor: "#D9D9D9",
    //     borderRadius: 100,
    // },

    // profileImageContainer: {
    //     width: ITEM_WIDTH - (0.60 * ITEM_WIDTH),
    //     height: ITEM_WIDTH - (0.60 * ITEM_WIDTH),
    //     paddingVertical: RFValue(30),
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     borderWidth: 2,
    //     borderRadius: 100,
    //     backgroundColor: '#D9D9D9',
    //     borderColor: 'transparent'
    // },

    // profileIcon: {
    //     fontSize: RFValue(50),
    //     color: defaultStyleProperties.blackColor
    // },

    // -----------------------------------------
    containerImageProfile: {
        width: RFValue(96),
        height: RFValue(96),
        borderRadius: RFPercentage(50),
        marginTop: 8,
        position: 'relative',
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        borderWidth: 2,
        borderColor: '#D9D9D9'
    },

    imageProfile: {
        width: RFValue(96),
        height: RFValue(96),
        borderRadius: RFPercentage(50)
    },

    iconProfile: {
        fontSize: RFValue(96),
        color: defaultStyleProperties.blackColor
    },

    editButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: RFValue(32),
        height: RFValue(32),
        borderRadius: RFValue(16),
        backgroundColor: defaultStyleProperties.blueColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    pencilEdit: {
        fontSize: RFValue(16),
        color: defaultStyleProperties.whiteColor
    },
});

export default styles;