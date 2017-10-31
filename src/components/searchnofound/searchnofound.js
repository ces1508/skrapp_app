import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class SearchNotFound extends Component {
  constructor(props) {
    super(props)
  }

  return(){
    <View style = { styles.container }> 
      <View style={styles.containerText}> 
        <Text style={styles.text}> Lo sentimos, no encontramos el resultado. se el primero en estar aquí.</Text>
      </View>
      <View style={styles.containerImage}> 
        <Image style={styles.image} source={require('../../assets/images/subcaterogiLupa.png')} />
      </View>
    </View>
  }
 
}

const styles = StyleSheet.create({
  container: {

  },
  containerText: {

  }, 
  text: {

  },
  containerImage: {

  },
  image: {

  },


})