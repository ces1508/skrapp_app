import React, { Component } from 'react'
import{ View, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import QrCodeScanner from 'react-native-qrcode-scanner'

export default class QrReader extends Component {
  _onRead(e) {
    Actions.place({ placeId: e.data })
  }
  render() {
    return(
      <View style = { StyleSheet.main } >
          <Text style = { styles.text } onPress = {()=> Actions.place({ placeId: 'ju5Xg3XSRy' })}> Test </Text>
          <QrCodeScanner 
            reactivate = { false }
            onRead = { this._onRead.bind(this) }
            showMarker = { true } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  text: {
    marginTop: 55,
    padding: 10,
  }
})