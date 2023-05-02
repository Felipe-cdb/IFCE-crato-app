import { View, Text} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { refectoryStatusConstants } from '../../base/constants'
import { format } from 'date-fns'
import ptBrLocale from 'date-fns/locale/pt-BR'

import styles from './styles'
import { RefectoryStatusEnum } from '../../base/Enums'

type Props = {
    status: RefectoryStatusEnum
    vigencyDate: number 
}

const FormModel = ({ status, vigencyDate }: Props) => {
    return (
        <View style={{...styles.formContainer, backgroundColor: refectoryStatusConstants[status].color }}>
            <View style={styles.formStatusContainer}>
                <Text style={styles.formStatusText} > { refectoryStatusConstants[status].text } </Text>
                { !['openToAnswer', 'open'].includes(status) ? (
                    <Icon color={'white'} style={styles.formTrashIcon} name='trash-can-outline'/>
                ) : '' }
            </View>

            <View style={styles.formDateContainer}>
                <Icon color={'white'} style={styles.formDateIcon} name='calendar-blank'/>
                <Text style={styles.formDateText} > { format(vigencyDate, `dd 'de' MMMM 'de' yyyy`, { locale: ptBrLocale }) } </Text>
            </View>
        </View>
    )
}

export default FormModel;
