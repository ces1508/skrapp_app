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
      height: this.props.height || null,
      image: '',
    }
    this.state = {loadImage :false }
  }

  render() {
    let image = this.state.loadImage? this.props.avatar : require('../../../assets/images/avatar.png')
    console.log(image)
    return(
      <View style = {[ styles.header, this.defaulStyles]}>
        <View style = { styles.containerImage }>
          <Image style = {[ styles.containerImage, styles.image ]}  
          source = { image } 
          onLoadEnd = {() =>  this.setState({ loadImage: true })}
          />
        </View>
        <View>
          <Text style = {[ styles.text, styles.name ]}> { this.props.username }</Text>
          <Text style = { styles.text }> {this.props.address} </Text>
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
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
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