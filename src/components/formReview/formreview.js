import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import Rating from 'react-native-easy-rating'

export default class FormReview extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <View style={styles.containerReview} >
        <View style={styles.containerRatingLetraStar}>
          <View style={styles.containerRating}>
            <Text> {this.state.textRating} </Text>
            <Rating
              rating={this.state.rating}
              editable={true}
              iconWidth={35}
              iconHeight={35}
              max={5}
              onRate={this.onRating} />
            <Text style={styles.textStart}> Toca una estrella para calificar </Text>
          </View>
        </View>

        <View
          style={styles.containerReviewComment}  >
          <View >
            <Image
              style={styles.ReviewCommentImage}
              source={{ uri: 'https://lorempixel.com/100/100' }}
            />
          </View>
          <View style={styles.ReviewCommentComment}
          >
            <Text style={styles.TextTitle}> Escribe una breve reseña</Text>
            <TextInput
              value={this.state.comment}
              multiline={true}
              placeholder='Danos tu opinión'
              onChangeText={comment => this.setState({ comment })}
              style={styles.inputText}
            />

            <TouchableOpacity onPress={() => this.createReview()}>
              <View style={styles.containerButton}>
                <Text style={styles.textButton} > Enviar </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}