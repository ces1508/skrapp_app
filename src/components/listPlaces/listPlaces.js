import React, { Component } from 'react'
import Place from '../place'
import { FlatList, ActivityIndicator  } from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class ListPlaces extends Component {
  constructor(props) {
    super(props)
    this.renderFooter = this.renderFooter.bind(this)
  }

  renderFooter () {
    if (!this.props.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  nextPage (place) {
    Actions.place({ data: place, title: place.title })
  }

  render() {
    return (
      <FlatList
        keyExtractor = { item => item.objectId}
        data = { this.props.data }
        ListFooterComponent = {this.renderFooter}
        onEndReached = { this.props.loadMore() }
        onEndReachedThreshold = { 0.5}
        onRefresh = { this.props.onRefresh }
        refreshing = { this.props.refreshing }
        renderItem = { ({item}) => <Place data =  { item } currentPosition = {this.props.currentPosition} handleClick = { () => this.nextPage(item) } /> }
      />
    )
  }
}