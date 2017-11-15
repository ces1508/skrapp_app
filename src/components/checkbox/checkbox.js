import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native'

export default class Checkbox extends Component {
  constructor(props) {
    super(props)
  }

  renderCheck() {
    let { checked } = this.props
    if (checked) {
      return(
        <View style = {[ styles.checked, styles.checkbox ]}></View>
      )
    }
    return <View style = { styles.checkbox } ></View>
  }
   render() {
    return(
      <TouchableOpacity onPress = {() => this.props.handleClick()} >
        <View  style = { styles.container} >
            <Text style = { styles.title} > {this.props.title} </Text>
            {this.renderCheck()}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    height: 25,
    width: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000843',
  },
  checked: {
    backgroundColor: '#000843'
  },
  title: {
    fontSize: 18,
    color: '#39393a',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
  }
})