import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native'
import Rating from 'react-native-easy-rating'
export default RatingPlace = (props) => {
  return(
    <View style={styles.containerRatingLetraStar}>
      <View style={styles.containerRating}>
        <Text> {props.textRating} </Text>
        <Rating
          rating={props.rating}
          editable={true}
          iconWidth={35}
          iconHeight={35}
          max={5}
          iconSelected = { require('../../../assets/images/star.png') }
          onRate={props.onRating} />
        <Text style={styles.textStart}> Toca una estrella para calificar </Text>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  containerRatingLetraStar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    // borderWidth: 1,
  },
  containerRating: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  textStart: {
    paddingTop: 5,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 13,
  },

})