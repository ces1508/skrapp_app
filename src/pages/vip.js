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
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Rating from 'react-native-easy-rating'
import CardVip from '../components/cardVip/'

const vip = {
  porciento: ' 50%',
  img: 'https://lorempixel.com/600/400/',
  title: 'It is often frustrating to attempt to plan meals that are designed for one.',
  discount: '50%',
  before: '$40.000',
  after: '$20.000',
  nameplace: 'DEPORTES ALDANA',
}

const vips = Array(100).fill(vip);

export default class Vip extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style = { styles.container }> 
        <FlatList
          data = { vips }
          // horizontal = { true }
          numColumns = { 2 }
          renderItem = {({ item }) => {

            return (
              <CardVip vip = { vip }/>
            )
          }} />
     
      </View>
    )
  }
}


const styles =  StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    
  },
  
})