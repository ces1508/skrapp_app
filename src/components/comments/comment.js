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
  }
})