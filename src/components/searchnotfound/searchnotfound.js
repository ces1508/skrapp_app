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

  render(){
    return(
      <View style = { styles.container }> 
        <View style={styles.containerText}> 
          <Text style={styles.text}> Lo sentimos, no encontramos el resultado. se el primero en estar aquí.</Text>
        </View>
        <View style={styles.containerImage}> 
          <Image style={styles.image} source={require('../../../assets/images/subcategoriLupa.png')} />
        </View>
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
    

  },
  containerText: {
    paddingHorizontal: 20,
  }, 
  text: {
    color: 'red',
    fontSize: 20, 
    color: '#454545',
    marginBottom: 30,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',

  },
  containerImage: {
  },
  image: {
    width: 150,
    height: 150, 
    

  },


})