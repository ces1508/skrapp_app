import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'

import CardVip from '../../components/cardVip/'



export default class DescriptionOfert extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FlatList
        data = { this.props.data }
        horizontal = { this.props.isHorizontal }
        numColumns = { this.props.isHorizontal ? 1 : 2 }
        keyExtractor = { this._keyExtractor}
        renderItem = {({ item }) => {
          return (
            <CardVip data = { item } />
          )
        }} />
    )
  }
}

