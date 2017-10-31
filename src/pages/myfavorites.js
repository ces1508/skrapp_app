import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Api from '../api' 
import ListPlaces from '../components/listPlaces'
export default class MyFavorites extends Component {
  constructor(props){
    super()
    this.state = {
      places: [],
      loading: true,
      error: false,
      currentPosition: window.position
    }
    this.renderContent = this.renderContent.bind(this)
  }

  async getFavorites() {
    let favorites = await Api.getFavorites()
    this.setState({ loading: false, places: favorites })
  }

  componentDidMount() {
    this.getFavorites()
  }

  renderContent() {
    let { loading, places, currentPosition } = this.state
    if (loading) {
      return <ActivityIndicator color = 'orange' size = 'large'/>
    } else {
      if (places.length > 0) {
        return <ListPlaces data = { places } currentPosition = { currentPosition }/>
      } else {
        return(
          <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text> Aun no tiene favoritos </Text>
          </View>
        )
      }
     }
  }

  render() {
    return this.renderContent()
  }
}