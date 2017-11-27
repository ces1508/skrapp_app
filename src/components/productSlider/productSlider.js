import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export default class ProductSlider extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const img = 'https://lorempixel.com/600/400/'
    return(
      <Swiper style={styles.wrapperContainer} showsButtons={false} loop={true} autoplay={true}>
        <View style={styles.slide1}>
          <Image
            style={styles.image}
            source={{ 'uri': img }}
          />
        </View>
        <View style={styles.slide1}>
          <Image
            style={styles.image}
            source={{ 'uri': img }}
          />
        {
          // <Text style={styles.text}>Beautiful</Text>
        }
        </View>
        <View style={styles.slide1}>
          <Image
            style={styles.image}
            source={{ 'uri': img }}
          />
          {
            // <Text style={styles.text}>And simple</Text>
          }
        </View>
      </Swiper>

    )
  }
}

const styles = StyleSheet.create({
  wrapperContainer: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  image: {
    width,
    height: 200,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})