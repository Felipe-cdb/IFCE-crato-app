import React from 'react'
import { View, Text, Image, FlatList } from "react-native"

import styles from './style'
import { IUser } from '../../base/Interfaces'
import { constantUserType } from '../../base/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { format } from 'date-fns'

type QrCoreData = {
    qrcodeContent: string
}

type CardProp = {
    item?: {
        userData?: IUser,
        qrCodeData?: QrCoreData
    },
    index?: number
} 

const CarouselCardItem = ({ index, item }: CardProp) => {
    return (
        <View style={styles.container} key={index}>
            { item?.userData ? (<>
                <View style={styles.containerLogo}>
                    <Image style={styles.image2} source={require('./../../assets/images/Logo.png')} />
                    <Text style={styles.textDestaque}>INSTITUTO FEDERAL</Text>
                    <Text style={styles.textCe}>Campus Crato</Text>
                    <View style={styles.square}/>
                </View>
                <Image
                    source={{
                        uri: item.userData.avatarUrl
                    }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title} > { item.userData.name } </Text>
                    <Text style={styles.subtitle} > { constantUserType[item.userData.type as any] } </Text>
                </View>
                <View style={styles.informations}>
                    <View style={styles.infoLine}>
                        <Text style={styles.header}>Matrícula/Siao: </Text>
                        <Text style={styles.body}>item?.userData?.registration || item?.userData?.registration</Text>
                    </View>
                    
                    <View style={styles.infoLine}>
                        <Text style={styles.header}>Curso: </Text>
                        <Text style={styles.body}>item?.userData?.course</Text>
                    </View>
                    
                    <View style={styles.infoLine}>
                        <Text style={styles.header}>Email: </Text>
                        <Text style={styles.body}>{item?.userData?.email}</Text>
                    </View>
                    
                    <View style={styles.infoLine}>
                        <Text style={styles.header}>Emissão: </Text>
                        <Text style={styles.body}>format(new Date(item?.userData?.createdAt || Date.now()), 'dd/MM/yyyy')</Text>
                    </View>
                </View>
            </>) : (<>
                <View style={styles.validationContainer}>
                    <View style={styles.validationFooter}>
                        <Text style={styles.smallTitle}> <Icon size={16} name='school-outline' /> IFCE - Campus Crato</Text>
                        <Text style={styles.smallTitle}> <Icon size={16} name='google-maps' /> CE-292, SN - Gisélia Pinheiro, Crato - CE, 63115-500</Text>
                        <Text style={styles.smallTitle}> <Icon size={16} name='phone' /> (88) 3586-8100 </Text>
                    </View>
                </View>
            </>)}
        </View>
    )
}

export default CarouselCardItem;