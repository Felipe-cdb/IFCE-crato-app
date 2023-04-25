import React from 'react'
import { SafeAreaView, StyleSheet } from "react-native"
import CarouselCards from './CarouselCards'
import Menu from '../../components/Menu'


const UserCard = () => {

    return (
        <>
            <Menu />
            <SafeAreaView style={styles.container} >
                <CarouselCards/>
            </SafeAreaView>
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