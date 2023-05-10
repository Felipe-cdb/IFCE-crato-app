import React from 'react'
import { View, StyleSheet } from "react-native"
import CarouselCards from './CarouselCards'
import Menu from '../../components/Menu'


const UserCard = () => {

    return (
        <>
            <Menu />
            <View style={styles.container} >
                <CarouselCards/>
            </View>
        </>
    )
}

export default UserCard;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50
    },
  });