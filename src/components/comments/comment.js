import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import Rating from 'react-native-easy-rating'

export default Comment = (props) => {
  console.log('props ', props)
  return(
    <View style = { styles.review }>
      <View style = { styles.containerImgProfile } >
        <Image source = {{uri: 'https://lorempixel.com/150/150'}} />
      </View>
      <View style = { styles.comment }>
        <Rating rating = { props.rating } editable = {false} iconWidth = { 25 } iconHeight = { 25 }/>
        <Text> {props.comment} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  review: {
    flex: 1, 
    flexDirection: 'row'
  },
  containerImgProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  }, 
  comment: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink'
  }
})