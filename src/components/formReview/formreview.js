import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native'
import Rating from '../ratingPlace'
import { Buttom } from '../buttom'
export default class FormReview extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let { textRating, rating, onRating} = this.props
    return (
      <View style={styles.containerReview}>
        <Rating  textRating = { textRating } onRating = { onRating } rating = { rating }  />
        <View style={styles.containerReviewComment}>
          <View style={styles.ReviewCommentComment}>
            <Text style={styles.TextTitle}> Escribe una breve reseña</Text>
            <TextInput
              value={this.props.value}
              multiline={true}
              placeholder='Danos tu opinión'
              onChangeText={comment => this.props.handleInput(comment)}
              style={styles.inputText}
            />
            <Buttom text = 'Enviar' styleButtom = { styles.containerButton  } handlePress = { this.props.submit } styleText = { styles.textButton } />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  containerReview: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginHorizontal: 10,
    marginTop: 15,
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  },
  containerReviewComment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  ReviewCommentImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
  },
  ReviewCommentComment: {
    flex: 1,
    paddingBottom: 10,
    paddingLeft: 5,
    // borderWidth: 1
  },
  TextTitle: {
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 17,
    textAlign: 'center'
  },
  inputText: {
    height: 60,
    borderColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    paddingLeft: 10,
    lineHeight: 20,
  },
  containerButton:{
    backgroundColor: '#f59803',
    marginTop: 15,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 17,
  }

})