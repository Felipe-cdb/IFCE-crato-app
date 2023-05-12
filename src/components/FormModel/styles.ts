import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    formContainer: {
        width: '80%',
        padding: RFValue(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: RFValue(8),
        alignSelf: 'center',
        borderRadius: RFValue(8)
    },

    formStatusContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: RFValue(5),
        marginBottom: RFValue(16)
    },

    formStatusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFValue(16)
    },
    formTrashIcon: {
        fontSize: RFValue(16),
        color: 'white'
    },

    formDateContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    formDateIcon: {
        fontSize: 14
    },

    formDateText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
})

export default styles