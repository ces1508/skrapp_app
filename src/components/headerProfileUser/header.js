import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
export default class HeaderProfile extends Component {
  constructor(props) {
    super(props)
    this.defaulStyles = {
      height: this.props.height || null
    }
  }


  render() {
    return(
      <View style = {[ styles.header, this.defaulStyles]}>
        <View style = { styles.containerImage }>
          <Image style = {[ styles.containerImage, styles.image ]}  source = {{uri: 'https://lorempixel.com/300/300/'}} />
        </View>
        <View>
          <Text style = {[ styles.text, styles.name ]}>Juan Lizcano</Text>
          <Text style = { styles.text }> Neiva, Hu </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f08300',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  name: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
  },
  containerImage: {
    width: 106,
    height: 106,
    borderRadius: 53,
    backgroundColor: 'gray',
    marginBottom: 10
  },
  image: {
    backgroundColor: Platform.OS === 'ios'? 'gray': 'transparent',
    borderWidth: 6,
    borderColor: '#fff'
  }
})