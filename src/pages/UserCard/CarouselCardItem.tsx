import React from 'react'
import { View, Text, Image, FlatList } from "react-native"

import styles from './style'
import { IUser } from '../../base/Interfaces'
import { constantUserType } from '../../base/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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

    const flatListData = [
        {
            key: 'Matrícula',
            value: '123412341234'
        },
        {
            key: 'Curso',
            value: 'Sistemas de Informação'
        },
        {
            key: 'Email',
            value: item?.userData?.email
        },
        {
            key: 'Emissão',
            value: '18/03/2023'
        }
    ]

    return (
        <View style={styles.container} key={index}>
            { item?.userData ? (
                <>
                <View style={styles.userPersonalInfo}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.image2} source={require('./../../assets/images/Logo.png')} />
                        <Text style={styles.textDestaque}>INSTITUTO FEDERAL</Text>
                        <Text style={styles.textCe}>Campus Crato</Text>
                    </View>

                    <View style={styles.square}>
                    </View>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVzc29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' }}
                    style={styles.image}
                />
                    <View style={styles.textContainer}>
                        <Text style={styles.title} > { item.userData.name } </Text>
                        <Text style={styles.subtitle} > { constantUserType[item.userData.type as any] } </Text>
                    </View>
                </View>
               
               <FlatList
               data={flatListData}
               renderItem={({ item }) => (
                <View>
                    <Text style={styles.header}>{item.key} :</Text>
                    <Text
                    style={styles.body}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    > 
                    { item.value }
                    </Text>
                </View>
               )}
               />
                
                </>
            ) : (
                <>
                <View style={styles.validationContainer}>
                    <View style={styles.codeField}>
                        <Text style={styles.codeTitle}> 123-432 </Text>
                        <Text style={styles.title}> Código de Verificação </Text>
                    </View>

                    <View style={styles.validationFooter}>
                        <Text style={styles.smallTitle}> <Icon size={16} name='school-outline' /> IFCE - Campus Crato</Text>
                        <Text style={styles.smallTitle}> <Icon size={16} name='google-maps' /> CE-292, SN - Gisélia Pinheiro, Crato - CE, 63115-500</Text>
                        <Text style={styles.smallTitle}> <Icon size={16} name='phone' /> (88) 3586-8100 </Text>
                    </View>
                </View>
                </>
            )}
        </View>
    )
}

export default CarouselCardItem;