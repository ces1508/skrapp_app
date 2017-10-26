
import React, { Component } from 'react'
import Category from '../category'
import { FlatList, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.nextView = this.nextView.bind(this)
  }

  nextView (category) {
    Actions.detailCategory({ title:  category.title , id: category.objectId})
  }
  
  render() {
    return(
      <FlatList
        data = { this.props.data }
        keyExtractor={item => item.objectId}
        renderItem = {({item}) =>
          <Category
            data = { item } handleClick = { () => this.nextView(item) } />
        }
      />
    )
  }
}