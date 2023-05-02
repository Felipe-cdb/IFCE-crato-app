import { Text, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const EmptyRefectory = () => {
    return (
        <View style={{
            height: '100%',
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Icon name="silverware-fork-knife" style={{
                fontSize: RFValue(80),
                color: '#19882C',
                opacity: 0.6,
            }}/>
    
            <Text style={{
                fontSize: RFValue(16),
                fontWeight: '700',
                color: '#19882C',
                opacity: 0.6,
            }}>
                Não há formulários no momento!
            </Text>
        </View>
    )
}

export default EmptyRefectory
