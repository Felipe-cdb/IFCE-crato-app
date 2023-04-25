import React from 'react'
import { View, Dimensions, StyleSheet } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem from './CarouselCardItem'
import { AuthContext } from '../../context/auth'
import { RFValue } from 'react-native-responsive-fontsize'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = () => {
  const [index, setIndex] = React.useState<number>(0)  
  const isCarousel: any = React.useRef(null)
  
  const { user } = React.useContext(AuthContext)

  const carouselData = [{
    userData: user
  },
  {
    qrCodeData: { qrcodeContent: 'Testando para ver se aparece o conteudo do qrcode' }
  },
  ]

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        vertical={false}
        ref={isCarousel}
        data={carouselData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={2}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            // marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: RFValue(40)
  },
});


export default CarouselCards