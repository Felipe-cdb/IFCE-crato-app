import { Text, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./styles"

const EmptyRefectory = () => {
    return (
        <View style={styles.containerEmpty}>
            <Icon name="silverware-fork-knife" style={styles.iconEmpty} />

            <Text style={styles.textEmpty}>
                Não há formulários no momento!
            </Text>
        </View>
    )
}

export default EmptyRefectory
