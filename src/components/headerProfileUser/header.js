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
    }
    this.state = {loadImage :false }
  }


  render() {
    return(
      <View style = {[ styles.header, this.defaulStyles]}>
        <View style = { styles.containerImage }>
          <Image style = {[ styles.containerImage, styles.image ]}
          source = { this.props.avatar }
          onLoadEnd = { () => this.setState({ loadImage: true }) }
          defaultSource = {require('../../../assets/images/avatar.png') }
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
    paddingTop: 25,
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
  },
  containerImage: {
    width: 106,
    height: 106,
    borderRadius: 53,
    marginBottom: 5,
  },
  image: {
    backgroundColor: Platform.OS === 'ios'? 'gray': 'transparent',
    borderWidth: 6,
    borderColor: '#fff',
  }
})