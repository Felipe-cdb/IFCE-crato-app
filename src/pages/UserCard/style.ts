import { StyleSheet, Dimensions } from "react-native";
import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const SLIDER_HEIGHT = Dimensions.get('window').height
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.7)

export default StyleSheet.create({
    container: {
      backgroundColor: '#75B874',
      borderRadius: 8,
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT - ( 0.10 * ITEM_HEIGHT ),
      paddingBottom: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 4,
      alignItems: "center",
      justifyContent: "center"
    },

    square: {
      width: ITEM_WIDTH - (0.08 * ITEM_WIDTH),
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderRightWidth: 100,
      borderBottomWidth: 100,
      borderLeftWidth: 100,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#275D8E',
      borderLeftColor: 'transparent',
      transform: [{ rotate: '180deg' }],
      position: "absolute",
      top: 0,
      zIndex: -1
    },

    userPersonalInfo: {
      alignContent: "center",
      alignItems: 'center',
      width: ITEM_WIDTH,
    },

    logoContainer: {
      alignContent: "center",
      alignItems: 'center',
    },
    
    image: {
      width: ITEM_WIDTH - (0.5 * ITEM_WIDTH),
      height: ITEM_WIDTH - (0.5 * ITEM_WIDTH),
      borderTopEndRadius: 20,
      borderBottomLeftRadius: 20,
      marginTop: 16
    },

    image2: {
      width: 34,
      height: 49,
    },

    textDestaque: {
      fontSize: RFValue(10),
      fontWeight: '700',
      textAlign: "center",
      color: 'white'
    },

    textCe: {
      fontSize: RFPercentage(2),
      marginTop: RFValue(4),
      borderTopWidth: 1,
      borderTopColor: '#379936',
      textAlign: 'center',
      color: 'white'
    },

    textContainer: {
      borderTopEndRadius: 20,
      borderBottomLeftRadius: 20,
      backgroundColor: '#275D8E',
      width: ITEM_WIDTH - (0.1 * ITEM_WIDTH),
      marginTop: 7,
      padding: 18,
      alignContent: "center",
      alignItems: 'center',
    },

    title: {
      color: 'white',
      fontWeight: "bold",
      fontSize: 20
    },

    subtitle: {
      color: '#69A568',
      fontSize: 18
    },

    header: {
      color: "#222",
      fontSize: 18,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 18
    },
    body: {
      color: "#222",
      fontSize: 16,
      paddingLeft: 20,
      paddingRight: 20
    },

    validationContainer: {
      borderTopEndRadius: 20,
      borderBottomLeftRadius: 20,
      backgroundColor: '#275D8E',
      width: ITEM_WIDTH - ( 0.20 * ITEM_WIDTH ),
      height: ITEM_HEIGHT - ( 0.20 * ITEM_HEIGHT ),
      justifyContent: "space-around",
      alignItems: "center",
    },

    codeField: {
      alignItems: "center"
    },

    validationFooter: {
      marginTop: 20,
      alignItems: "flex-start"
    },

    codeTitle: {
      color: 'black',
      fontWeight: "bold",
      fontSize: 26
    },

    smallTitle: {
      color: 'white',
      fontWeight: "normal",
      fontSize: 14,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5
    }
  })