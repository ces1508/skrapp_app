import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Rating from 'react-native-easy-rating'
import ProductSlider from '../../components/productSlider'
import CardVip from '../../components/cardVip/'
import ListOferts from '../listOferts'
import MoreInfoOfert from '../moreInfoOfert'

const vip = {
  porciento: ' 50%',
  img: 'https://lorempixel.com/600/400/',
  title: 'It is often frustrating to attempt to plan meals that are designed for one.',
  discount: '50%',
  before: '$40.000',
  after: '$20.000',
  nameplace: 'DEPORTES ALDANA',
}



const vips = Array(5).fill(vip);

export default class DescriptionOfert extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ScrollView> 
        <View style = { styles.container }>
          
          <View style = { styles.wrapperContainer }>
            <ProductSlider />
          </View>

          <MoreInfoOfert offert = { this.props.data }/>

          <View style = { styles.containerMoreArticles}>
            <Text style = { styles.titleMoreArticles}> Más artículos del vendedor </Text>
            <View style = { styles.containerlistOfert }>

              <ListOferts data = { vips }  isHorizontal = { true }/>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  wrapperContainer: {
    height: 200,
    marginBottom: 10,
  },
  containerMoreArticles: {
    backgroundColor: '#e1e1e1',
    paddingVertical: 10,
  },
  titleMoreArticles: {
    color: '#4A4A4A',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 15,
  },
  containerlistOfert: { 
    paddingHorizontal: 5,
  },




})