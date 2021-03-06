import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import PlaceBanner from '../components/placeBanner'
import PlacePicture from '../components/placePicture'
import Comments from '../components/comments'
import FormReview from '../components/formReview'
import Api from '../api'

export default class Riew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      rating: 0,
      comments: [],
      textRating: '',
      loadingComments: true,
    }
    this.onRating = this.onRating.bind(this)
    this.getComments = this.getComments.bind(this)
    this.createReview = this.createReview.bind(this)
    this.getComment = this.getComment.bind(this)
    this.renderComments = this.renderComments.bind(this)
  }

  async getComments() {
    let { objectId } = this.props.place
    let comments = await Api.getReviews(objectId)
    this.setState({ comments , loadingComments: false})
  }

  onRating (rate) {
    let text = ''
    switch (rate) {
      case 1:
      text ='No me gusto en lo absoluto'
      break
      case 2:
        text = 'No me gustó'
        break
      case 3:
        text = 'Está bien'
        break
      case 4:
        text = 'Me gustó'
        break
      case 5:
        text = 'Me encantó'
        break
      default:
        text = ''
    }
    this.setState({ rating: rate, textRating: text})
  }

  getComment(comment) {
    this.setState({ comment })
  }
  componentDidMount() {
    this.getComments()
  }
  async createReview () {
    let { comment, rating } = this.state
    if (rating === 0 ) return Alert.alert('ups!', 'debes asignar una puntuacion')
    let { objectId } = this.props.place
    let data = {
      comment,
      rating,
      place: {
        __type: 'Pointer',
        className: 'Place',
        objectId
      }
    }
    let review = await Api.makeReview(data)
    if (review.error) {
      return Alert.alert(
        'ups !',
        review.code === 141? 'tu ya tienes una resenia de este lugar': 'estamos presentando problemas, por favor intenta mas tarde'
      )
    }
    this.setState({ comment: '', rating: 0 })
    this.getComments()
  }

  renderComments() {
    let { loadingComments, comments } = this.state
    if (loadingComments) {
      return <ActivityIndicator color = 'orange' size = {1} />
    }
    return <Comments comments={this.state.comments} />
  }

  render() {
    let { imageThumb, image, imageTwo } = this.props.place
    return(
      <ScrollView>
        <View style = { styles.container }>
          <PlaceBanner banner = { imageTwo? imageTwo.url: image.url }>
            <View style = {{ marginTop:100 }} >
              <PlacePicture profileImage =  { imageThumb.url } />
            </View>
          </PlaceBanner>
        </View>
        <FormReview
          handleInput = { this.getComment }
          value = {this.state.comment}
          textRating = { this.state.textRating }
          rating = { this.state.rating }
          onRating = { this.onRating }
          submit = { this.createReview }
          />
        <View style = {{ paddingVertical: 5}} >
          {this.renderComments()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: 'rgba(0,0,0,.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },


})