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
import Icon from 'react-native-vector-icons/FontAwesome'
import Rating from 'react-native-easy-rating'
import CardVip from '../../components/cardVip/'



export default class DescriptionOfert extends Component {
  constructor(props) {
    super(props)
  }

  descriptionOfert() {
    Actions.descriptionOfert()
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
            <TouchableOpacity onPress={() => this.descriptionOfert()}>
              <CardVip data = { item } />
            </TouchableOpacity>
          )
        }} />
    )
  }
}

