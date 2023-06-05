import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { defaultStyleProperties } from "../../base/styles";

export default StyleSheet.create({

  // __________________Index___________________
  mainContainer: {
    backgroundColor: defaultStyleProperties.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFValue(40)
  },

  // __________________CarouselCards___________________

  carouselCardsContainer: {
    backgroundColor: defaultStyleProperties.whiteColor,
    paddingBottom: RFValue(30)
  },

  carouselCardsPagination: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: defaultStyleProperties.blackColor

  },

  // __________________CarouselCardItem___________________
  container: {
    flex: 1,
    backgroundColor: '#75B874',
    borderRadius: 8,
    paddingBottom: 10,
    shadowColor: defaultStyleProperties.blackColor,
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
    borderBottomColor: defaultStyleProperties.blueColor,
    borderLeftColor: 'transparent',
    transform: [{ rotate: '180deg' }],
    position: "absolute",
    top: 0,
    zIndex: -1
  },

  image2: {
    width: 30,
    height: 42,
    marginTop: RFValue(8)
  },

  textDestaque: {
    fontSize: RFValue(10),
    fontWeight: '700',
    textAlign: "center",
    color: defaultStyleProperties.whiteColor,
  },

  textCe: {
    fontSize: RFPercentage(2),
    marginTop: RFValue(4),
    borderTopWidth: 1,
    borderTopColor: defaultStyleProperties.greenColor,
    textAlign: 'center',
    color: defaultStyleProperties.whiteColor,
  },

  image: {
    width: '50%',
    height: '35%',
    borderTopRightRadius: RFValue(24),
    borderBottomLeftRadius: RFValue(24),
  },

  textContainer: {
    borderTopRightRadius: RFValue(24),
    borderBottomLeftRadius: RFValue(24),
    backgroundColor: defaultStyleProperties.blueColor,
    width: '90%',
    marginTop: RFValue(8),
    padding: RFValue(8),
    alignContent: "center",
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: RFValue(20)
  },

  subtitle: {
    color: '#69A568',
    fontSize: RFValue(16)
  },

  informations: {
    flex: 1,
    marginTop: RFValue(16),
    paddingLeft: RFValue(5),
    paddingRight: RFValue(2),
  },

  infoLine: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: 'wrap',
    marginBottom: 5
  },

  header: {
    color: "#222",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },

  body: {
    color: "#222",
    fontSize: RFValue(16),
  },

  validationContainer: {
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: defaultStyleProperties.blueColor,
    width: '90%',
    height: '90%',
    justifyContent: "space-around",
    alignItems: "center",
  },

  validationFooter: {
    alignItems: "flex-start"
  },

  smallTitle: {
    color: defaultStyleProperties.whiteColor,
    fontWeight: "normal",
    fontSize: RFValue(16),
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  },

  iconsBackCard: {
    color: defaultStyleProperties.whiteColor,
    fontSize: RFValue(16),
  }

})