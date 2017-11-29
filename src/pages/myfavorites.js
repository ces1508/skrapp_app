import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Api from '../api'
import ListPlaces from '../components/listPlaces'
import SearchNotFound from '../components/searchnotfound'
import { getCurrentPosition, getLastPosition, AlreadyUser } from '../utils'
import { Actions } from 'react-native-router-flux';
export default class MyFavorites extends Component {
  constructor(props){
    super()
    this.state = {
      places: [],
      loading: true,
      error: false,
      text: 'Aun no tienes Favoritos',
      currentPosition: {error: true}
    }
    this.renderContent = this.renderContent.bind(this)
    this.getPosition = this.getPosition.bind(this)
  }

  async getFavorites() {
    this.getPosition()
    let favorites = await Api.getFavorites()
    this.setState({ loading: false, places: favorites })
  }

  async getPosition() {
    let position = {error: true}
    let currentPosition = await getCurrentPosition()
    let lastPosition = await getLastPosition()
    if (!currentPosition.error) {
      position = currentPosition
    } else if(!lastPosition.error) {
      position = lastPosition
    }
    this.setState({ currentPosition: position })
  }

  async componentDidMount() {
    let userAlreadySignin = await AlreadyUser()
    if(userAlreadySignin) {
      this.getFavorites()
    } else {
      this.setState({ loading: false, text: 'Primero debes iniciar sesión ' })
      return Actions.login({ ensureLogin: true })
    }
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
            <SearchNotFound text = { this.state.text }/>
          </View>
        )
      }
     }
  }

  render() {
    return this.renderContent()
  }
}