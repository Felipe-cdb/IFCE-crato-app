import { Text, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./styles"

const RefectoryAlreadyAnswered = () => {
    return (
        <View style={styles.containerAlreadyAnswered}>
            <Icon name="send-check-outline" style={styles.iconAlreadyAnswered} />

            <Text style={styles.textAlreadyAnswered}>
                Resposta já enviada, ou o formulário não aceita mais respostas
            </Text>
        </View>
    )
}

export default RefectoryAlreadyAnswered
