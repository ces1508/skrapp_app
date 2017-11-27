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
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Rating from 'react-native-easy-rating'
import CardVip from '../components/cardVip/'
import ProductSlider from '../components/productSlider'
import ListOferts from '../components/listOferts'

// para despues eliminar
import axios from 'axios'
let makeRequest = async () => {
  try {
    let r = await axios('https://jsonplaceholder.typicode.com/posts')
    console.log(r)
    return r.data
  } catch (e) {
    console.log('error ', e.message)
  }
}

const { width } = Dimensions.get('window')

// const vips = Array(100).fill(vip);

export default class Vip extends Component {
  constructor(props){
    super(props)
    this.state = { data: [] }
  }

  async componentDidMount() {
    let data = await makeRequest()
    this.setState({ data })
  }
  render(){
    return(
      <View style = { styles.container }> 
        <View style = { styles.wrapperContainer }> 
          <ProductSlider />
        </View>
        <ListOferts data = {this.state.data} mode = { false } />

      </View>
    )
  }
}


const styles =  StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapperContainer: {
    height: 200,
    marginBottom: 10,
  },

  
})