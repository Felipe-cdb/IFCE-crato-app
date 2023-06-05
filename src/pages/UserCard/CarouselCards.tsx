import React from 'react'
import { View, Dimensions } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem from './CarouselCardItem'
import { AuthContext } from '../../context/auth'
import styles from './styles'

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
    backCard: {}
  },
  ]

  return (
    <View style={styles.carouselCardsContainer}>
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
        dotStyle={styles.carouselCardsPagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

export default CarouselCards