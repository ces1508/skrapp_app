
import React, { Component } from 'react'
import Category from '../category'
import { FlatList, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Header from '../headerSearch'
export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.nextView = this.nextView.bind(this)
    this.ListHeader = this.ListHeader.bind(this)
  }

  nextView (category) {
    Actions.detailCategory({ title:  category.title , id: category.objectId})
  }


  ListHeader () {
    return <Header handleFilter = {this.props.onFilter} />
  }

  
  render() {
    return(
      <FlatList
        data = { this.props.data }
        keyExtractor={item => item.objectId}
        ListHeaderComponent = {this.ListHeader}
        onRefresh = { this.props.onRefresh }
        refreshing = { this.props.refreshing } 
        renderItem = {({item}) =>
          <Category
            data = { item } handleClick = { () => this.nextView(item) } />
        }
      />
    )
  }
}