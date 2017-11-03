import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
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
  }

  async getComments() {
    let { objectId } = this.props.place
    let comments = await Api.getReviews(objectId)
    this.setState({ comments })
  }

  onRating (rate) {
    let text = ''
    if (rate < 3) {
      text = 'no me gusta'
    }
    else if (rate === 3) {
      text = 'esta bien'
    }
    else if (rate === 4) {
      text = 'me encanta'
    } else {
      text = 'es perfecto'
    }
    this.setState({ rating: rate, textRating: text, comment: text })
  }

componentDidMount() {
  this.getComments()
}

  render() {
    return(
      <View >
        <View style = { styles.container }>
          <PlacePicture profileImage =  'http://www.lorempixel.com/100/100' />
        </View>

        <View style = {{ 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          marginHorizontal: 10, 
          marginTop: 15,
        }} >

          <View style = {{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'red',
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
                iconWidth={35} 
                iconHeight={35}
                max={5} 
                onRate={this.onRating} /> 
  
                <Text
                  style = {{ paddingTop: 5}}
                > Toca una estrella para calificar </Text>          
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              borderWidth: 1,
            }}  > 
              <View>
                <Image
                  style = {{ width: 60, height: 60 , borderWidth: 1, borderRadius: 30,}}
                  source = {{ uri: 'https://lorempixel.com/100/100' }}
                 />
              </View>
              <View style={{
                flex: 1,
                padding: 10,
              }}
              >
                <Text> Escribe una breve reseña</Text>      
                <TextInput 
                  value = {this.state.comment }
                  multiline = { true }
                  placeholder = 'Danos tu opinión'
                  onChangeText = { comment => this.setState({ comment }) }
                  style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 , paddingLeft: 10 }}
                />    
              </View>      
          </View>
        </View>
        <View>
            <Text> Hola Comentario</Text>
        </View>
       <View>
          <Comments comments = {this.state.comments}/>
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