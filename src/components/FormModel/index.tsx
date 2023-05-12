import { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { refectoryStatusConstants } from '../../base/constants'
import { format } from 'date-fns'
import ptBrLocale from 'date-fns/locale/pt-BR'

import styles from './styles'
import { RefectoryStatusEnum } from '../../base/Enums'
import BoxDialog from '../BoxDialog'

type Props = {
    status: RefectoryStatusEnum,
    vigencyDate: number,
    id: string,
    onRefresh: () => void
}

const FormModel = ({ status, vigencyDate, id, onRefresh }: Props) => {

    const [deleteForm, setDeleteForm] = useState<boolean>(false);

    return (
        <>
            <BoxDialog
				visible={deleteForm}
				lessInfo={() => setDeleteForm(false)}
				deleteId={id}
				refreshing={onRefresh}
				typeDeletion="form_refectory"
			/>
            <View style={{...styles.formContainer, backgroundColor: refectoryStatusConstants[status].color }}>
                <View style={styles.formStatusContainer}>
                    <Text style={styles.formStatusText} > { refectoryStatusConstants[status].text } </Text>
                    { !['openToAnswer', 'open'].includes(status) ? (
                        <TouchableOpacity
                            onPress={() => setDeleteForm(true)}
                        >
                            <Icon style={styles.formTrashIcon} name='trash-can-outline'/>
                        </TouchableOpacity>
                    ) : '' }
                </View>

                <View style={styles.formDateContainer}>
                    <Icon color={'white'} style={styles.formDateIcon} name='calendar-blank'/>
                    <Text style={styles.formDateText} > { format(vigencyDate, `dd 'de' MMMM 'de' yyyy`, { locale: ptBrLocale }) } </Text>
                </View>
            </View>
        </>
    )
}

export default FormModel;