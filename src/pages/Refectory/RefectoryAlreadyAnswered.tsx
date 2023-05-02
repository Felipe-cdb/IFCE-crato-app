import { Text, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const RefectoryAlreadyAnswered = () => {
    return (
        <View style={{
            height: '100%',
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            paddingVertical: '20%'
        }}>
            <Icon name="send-check-outline" style={{
                fontSize: RFValue(40),
                color: '#19882C',
                opacity: 0.6,
            }}/>
    
            <Text style={{
                fontSize: RFValue(14),
                fontWeight: '700',
                color: '#19882C',
                opacity: 0.6,
            }}>
                Parabéns, você já enviou a sua resposta!
            </Text>
        </View>
    )
}

export default RefectoryAlreadyAnswered
