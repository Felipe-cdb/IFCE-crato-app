import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { defaultStyleProperties } from '../../base/styles'

const styles = StyleSheet.create({
    formContainer: {
        width: '80%',
        padding: RFValue(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: RFValue(10)
    },

    formStatusContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: RFValue(5),
        marginBottom: RFValue(14)
    },

    formStatusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },

    formDateContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    icon: {
        fontSize: 14,
        color: defaultStyleProperties.whiteColor
    },

    formDateText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
})

export default styles