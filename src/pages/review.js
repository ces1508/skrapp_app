import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import PlaceBanner from '../components/placeBanner'
import PlacePicture from '../components/placePicture'
import Rating from 'react-native-easy-rating'
import Comments from '../components/comments'
import Api from '../api'

export default class Riew extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      comment: '',
      rating: 0,
      comments: [],
      textRating: ''
    }
    this.onRating = this.onRating.bind(this)
    this.getComments = this.getComments.bind(this)
    this.createReview = this.createReview.bind(this)
  }

  async getComments() {
    let { objectId } = this.props.place
    let comments = await Api.getReviews(objectId)
    this.setState({ comments })
  }

  onRating (rate) {
    let text = ''
    if (rate < 3) {
      text = 'No me gusta'
    }
    else if (rate === 3) {
      text = 'Esta bien'
    }
    else if (rate === 4) {
      text = 'Ee encanta'
    } else {
      text = 'Es perfecto'
    }
    this.setState({ rating: rate, textRating: text})
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
      Alert.alert(
        'ups !',
        review.code === 141? 'tu ya tienes una resenia de este lugar': 'estamosm presentando problemas, por favor intenta mas tarde'
      )
    }
  }

  render() {
    return(
      <View  style = {{
        paddingBottom: 20,
      }}>
        <View style = { styles.container }>
          <PlacePicture profileImage =  'http://www.lorempixel.com/100/100' />
        </View>
        <View style = {{ 
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
          
        }} >

          <View style = {{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 15
          }}>
            <View style = {{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
              > 
              <Text> {this.state.textRating} </Text>
              <Rating 
                rating={this.state.rating}
                editable={true} 
                iconWidth={40} 
                iconHeight={40}
                max={5} 
                onRate={this.onRating} /> 
  
                <Text
                  style = {{ paddingTop: 5, fontFamily: 'Roboto-Regular', fontSize: 14,}}
                > Toca una estrella para calificar </Text>          
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              // borderWidth: 1,
              padding: 10,
            }}  > 
              <View >
                <Image
                  style = {{ width: 50, height: 50 , borderWidth: 1, borderRadius: 25,}}
                  source = {{ uri: 'https://lorempixel.com/100/100' }}
                 />
              </View>
              <View style={{
                flex: 1,
                // padding: 10,
                paddingBottom: 10,
                paddingLeft: 5
              }}
              >
              <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 17}}> Escribe una breve reseña</Text>      
                <TextInput 
                  value = {this.state.comment }
                  multiline = { true }
                  placeholder = 'Danos tu opinión'
                  onChangeText = { comment => this.setState({ comment }) }
                  style={{ height: 60, borderColor: 'rgba(0,0,0,.2)', borderBottomWidth: 1 , paddingLeft: 10 , lineHeight: 20,}}
                />    

                <TouchableOpacity onPress={() => this.createReview()}>
                <View style={{ borderWidth: 1, backgroundColor: '#f59803', padding: 10, width: 60, height: 60, borderRadius: 50}}>
                    <Text > Enviar </Text>
                  </View>
                </TouchableOpacity>
              </View>      
          </View>
        </View>
          <View style = {{ paddingVertical: 5}} >
            <Comments comments={this.state.comments} />            
          </View>
        </View> 

    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 75,
    


  }
})