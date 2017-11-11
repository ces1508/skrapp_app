import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

export default class PlaceInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { title, address, description } = this.props
    return(
      <View>
        <View style =  { styles.main }>
          <Text style =  { styles.name }> { title }  </Text>
          <Text style =  {[ styles.location, styles.textColor ]}> { address }  </Text>
        </View>
        <View style = { styles.containerDescription }>
          <Text numberOfLines = {6} ellipsizeMode = 'tail' style = {[ styles.description, styles.textColor ]}>
            { description }
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    color: '#454545',
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '500',

  },
  location: {
    marginTop: 10,
    fontSize: 18,
    color: '#7D7D7D',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },
  line: {
    marginTop: 5,
    width: 70,
    height: 5,
    backgroundColor: 'rgba(121, 124, 140, 0.6)',
    borderRadius: 5
  },
  containerDescription: {
    paddingHorizontal: 20,
    marginTop: 15,

  },
  description: {
    fontSize: 16,
    color: '#454545',
    lineHeight: 25,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    textAlign: 'center'

  },
})