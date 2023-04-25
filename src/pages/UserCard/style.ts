import { StyleSheet, Dimensions } from "react-native";
import  {  RFPercentage ,  RFValue  }  from  "react-native-responsive-fontsize" ;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75B874',
    borderRadius: 8,
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

  containerLogo: {
    width: '100%',
    paddingBottom: RFValue(8),
    alignItems: "center",
    justifyContent: "center"
  },

  square: {
    width: '90%',
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

  image: {
    width: '60%',
    height: '30%',
    borderTopRightRadius: RFValue(24),
    borderBottomLeftRadius: RFValue(24),
  },

  textContainer: {
    borderTopRightRadius: RFValue(24),
    borderBottomLeftRadius: RFValue(24),
    backgroundColor: '#275D8E',
    width: '90%',
    marginTop: RFValue(8),
    padding: RFValue(8),
    alignContent: "center",
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontWeight: "bold",
    fontSize: RFValue(24)
  },

  subtitle: {
    color: '#69A568',
    fontSize: RFValue(16)
  },

  informations: {
    flex: 1,
    marginTop: RFValue(8),
    justifyContent: "space-around"
  },

  infoLine: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  header: {
    color: "#222",
    fontSize: RFValue(20),
    fontWeight: "bold",
  },

  body: {
    color: "#222",
    fontSize: RFValue(16),
  },

  validationContainer: {
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#275D8E',
    width: '90%',
    height: '90%',
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
    fontSize: RFValue(32)
  },

  smallTitle: {
    color: 'white',
    fontWeight: "normal",
    fontSize: RFValue(16),
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  }
})