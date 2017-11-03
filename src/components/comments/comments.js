import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Comment from './comment'
export default class Comments extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.comments)
    return <FlatList
      data ={this.props.comments}
      renderItem = {({item}) => {
        console.log(item)
        return <Comment {...item } />
      }}
    />
  }
}