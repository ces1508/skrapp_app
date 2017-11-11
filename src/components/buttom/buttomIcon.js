import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

export default class ButtomIcon extends Component {
  constructor(props) {
    super(props)

    this.width = this.props.width || 400
    this.iconSize = this.props.iconSize || 20
    this.color = this.props.color || 'white'
    this.backgroundColor = this.props.backgroundColor || '#f98d2c'

    this.defaultStyleBtn = {
      width: this.width,
      backgroundColor: this.backgroundColor
    }

    this.defaultStylText = {
      color: this.color,
      fontSize: 16,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: 'transparent',
    }
  }

  render() {
    return(
      <View style = { [styles.main, this.props.styleBtn? this.props.styleBtn: this.defaultStyleBtn] }  >
        <Icon name = { this.props.icon } size = {this.iconSize} color = {this.props.colorIcon ||'white' } />
        <Text style = { this.props.styleText? this.props.styleText: this.defaultStylText }> { this.props.text } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: 40,
    ...Platform.select({
      ios: {
        padding: 10,
        borderRadius: 20,
      },
      android: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
      }
    })
  },
})
ButtomIcon.propTypes = {
  colorIcon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
}