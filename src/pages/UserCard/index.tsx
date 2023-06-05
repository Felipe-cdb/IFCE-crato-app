import React from 'react'
import { View } from "react-native"
import CarouselCards from './CarouselCards'
import Menu from '../../components/Menu'
import style from './styles'


const UserCard = () => {

    return (
        <>
            <Menu />
            <View style={style.mainContainer} >
                <CarouselCards />
            </View>
        </>
    )
}

export default UserCard;