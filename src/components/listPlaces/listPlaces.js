import React, { Component } from 'react'
import Place from '../place'
import { FlatList  } from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class ListPlaces extends Component {
  constructor(props) {
    super(props)
  }


  nextPage (place) {
    Actions.place({ data: place, title: place.title })
  }

  render() {
    return (
      <FlatList
        keyExtractor = { item => item.objectId}
        data = { this.props.data }
        renderItem = { ({item}) => <Place data =  { item } currentPosition = {this.props.currentPosition} handleClick = { () => this.nextPage(item) } /> }
      />
    )
  }
}