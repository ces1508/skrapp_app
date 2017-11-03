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



export default class Riew extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View >
        <View style = { styles.container }>
          
          <PlacePicture 
            source = {{ uri: 'https://lorempixel.com/100/100' }}/>
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
              <Rating 
                rating={this.props.ranking} 
                editable={true} 
                iconWidth={35} 
                iconHeight={35}
                max={5} 
                onRate={() => null} /> 
  
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
              <View
             
              >
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
                  multiline = { true }
                  placeholder = 'Danos tu opinión'
                  style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 , paddingLeft: 10 }}
                />    
              </View>
                            
          </View>

        </View>

        <View>
            <Text> Hola Comentario</Text>
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