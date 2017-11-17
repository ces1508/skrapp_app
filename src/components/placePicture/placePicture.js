import React, { Component } from 'react'
import { View, Image, StyleSheet, Platform } from 'react-native'
export default class PlacePicture extends Component {
  constructor(props) {
    super(props)
  }
    
  render() {
    return(
      <View style = {[ styles.container, styles.shadow]}>
        <Image  style = {[ styles.container, styles.image ]} source = {{ uri: this.props.profileImage }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({ 
  container: {
    marginTop: -75,
    height: 140,
    width: 140,
    borderRadius: 70,
    
  },
  image: {
    borderWidth: 6, 
    marginTop: 0,
    borderColor: '#fff',

  },
  shadow: {
    ...Platform.select({
      android: {  
        elevation: 3,
      },
      ios: {
        shadowColor: 'rgba(17, 16, 16, 0.33)',
        shadowOffset: {
          width: 3,
          height: 5,
        },
        shadowOpacity: 20,
      }
    })
  }
})
