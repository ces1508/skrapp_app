import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default class Buttom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <TouchableOpacity onPress = { () => this.props.handlePress() }>
        <View  style = { this.props.styleButtom }>
          <Text style = { this.props.styleText } > {this.props.text} </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
