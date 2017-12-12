import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'



export default class RectangleQR extends Component {
  render() {
    return (
      <View style = { styles.rectangleContainer}>
        <View style = { styles.rectangle }>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#f19733',
    backgroundColor: 'transparent',
  }, 

})