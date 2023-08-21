import React from 'react'
import { View, Text, Image } from "react-native"

import styles from './styles'
import { IUser } from '../../base/Interfaces'
import { constantUserType, courseConstants } from '../../base/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { format, parseISO } from 'date-fns'
import { UserTypes } from '../../base/Enums'

type CardProp = {
    item?: {
        userData?: IUser,
    },
    index?: number
}

const CarouselCardItem = ({ index, item }: CardProp) => {
    return (
        <View style={styles.container} key={index}>
            {item?.userData ? (<>
                <View style={styles.containerLogo}>
                    <Image style={styles.image2} source={require('./../../assets/images/Logo.png')} />
                    <Text style={styles.textDestaque}>INSTITUTO FEDERAL</Text>
                    <Text style={styles.textCe}>Campus Crato</Text>
                    <View style={styles.square} />

                </View>

                {!item?.userData?.avatarUrl ?
                    (
                        <View style={styles.image}>
                            <Icon name="account" style={styles.iconProfile} />
                        </View>
                    ) :
                    (<Image
                        source={{
                            uri: item.userData.avatarUrl
                        }}
                        style={styles.image}
                    />)
                }

                <View style={styles.textContainer}>
                    <Text style={styles.title} > {item.userData.name} </Text>
                    <Text style={styles.subtitle} > {constantUserType[item.userData.type as any]} </Text>
                </View>
                <View style={styles.informations}>
                    <View style={styles.infoLine}>
                        {!item?.userData?.type.includes(UserTypes.STUDENT) ? (
                            <Text style={styles.header}>Siap: </Text>
                        ) : (
                            <Text style={styles.header}>Matrícula: </Text>
                        )}
                        <Text style={styles.body}>{item?.userData?.registration || item?.userData?.siape}</Text>
                    </View>

                    {!item?.userData?.type.includes(UserTypes.STUDENT) ? '' : (
                        <View style={styles.infoLine}>
                            <Text style={styles.body}>
                                <Text style={styles.header}>Curso: </Text>
                                {courseConstants[`${item?.userData?.course}`]}
                            </Text>
                        </View>
                    )}

                    <View style={styles.infoLine}>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.body}>
                            <Text style={styles.header}>Email: </Text>
                            {item?.userData?.email}
                        </Text>
                    </View>

                    <View style={styles.infoLine}>
                        <Text style={styles.body}>
                            <Text style={styles.header}>Emissão: </Text>
                            {format(parseISO(item?.userData?.createdAt || String(new Date())), 'dd/MM/yyyy')}
                        </Text>
                    </View>
                </View>
            </>) : (<>
                <View style={styles.validationContainer}>
                    <View style={styles.validationFooter}>
                        <Text style={styles.smallTitle}> <Icon style={styles.iconsBackCard} name='school-outline' /> IFCE - Campus Crato</Text>
                        <Text style={styles.smallTitle}> <Icon style={styles.iconsBackCard} name='google-maps' /> CE-292, SN - Gisélia Pinheiro, Crato - CE, 63115-500</Text>
                        <Text style={styles.smallTitle}> <Icon style={styles.iconsBackCard} name='phone' /> (88) 3586-8100 </Text>
                    </View>
                </View>
            </>)}
        </View>
    )
}

export default CarouselCardItem;