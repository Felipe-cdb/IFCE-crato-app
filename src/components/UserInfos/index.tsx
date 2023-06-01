import React from 'react'
import { Text, View } from 'react-native'
import { UserPermitions, UserTypes } from "../../base/Enums"
import { constantUserType } from '../../base/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import UserPermissionsModal from '../UserPermissionsModal'

type UserInfosProps = {
    id: string
    name: string
    type: UserTypes
    identification: string
    email: string
    roles: UserPermitions[]
}

const UserInfos = ({ id, email, identification, name, type, roles }: UserInfosProps) => {
    const [isModal, setIsModal] = React.useState<boolean>(false)

    return (
        <>
            <UserPermissionsModal
                id={id}
                name={name}
                email={email}
                identification={identification}
                isVisible={isModal}
                setVisible={() => setIsModal(!isModal)}
                type={constantUserType[type]}
                roles={roles}
            />
            <TouchableOpacity onPress={() => setIsModal(!isModal)} style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text
                        ellipsizeMode='tail'
                        numberOfLines={1}
                        style={styles.nameText}> {name} </Text>
                    <Text style={styles.typeText}> {constantUserType[type]} </Text>
                </View>

                <View style={styles.identificationContainerStyle}>
                    <View style={styles.identificationStyle}>
                        <Icon
                            name='badge-account-horizontal-outline'
                            style={styles.iconStyle}
                        />
                        <Text style={styles.identificationTextStyle}>
                            {identification}
                        </Text>
                    </View>
                    <View style={styles.emailStyle}>
                        <Icon
                            name='email'
                            style={styles.iconStyle}
                        />
                        <Text
                            ellipsizeMode='tail'
                            numberOfLines={1}
                            style={styles.emailTextStyle}>
                            {email}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default UserInfos;