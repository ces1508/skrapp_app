import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import Rating from 'react-native-easy-rating'

export default Comment = (props) => {
  return(
    <View style = { styles.review }>
      <View style = { styles.containerImgProfile } >
        <Image source = {require('../../../assets/images/avatar.png')} style = { styles.image } />
      </View>
      <View style = { styles.comment }>
        <Text>{props.userData? props.userData.name: ''}</Text>
        <Rating rating = { props.rating }  iconSelected = { require('../../../assets/images/star.png') } editable = {false} iconWidth = { 25 } iconHeight = { 25 }/>
        <Text style = {{ flexWrap: 'wrap', lineHeight: 20,}}> {props.comment} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  review: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    shadowOpacity: .3,
    borderRadius: 4,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    padding: 10,

  },
  containerImgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  comment: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
  },
  image: {
    height: 50,
    width: 50
  }
})