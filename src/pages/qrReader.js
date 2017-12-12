import React, { Component } from 'react'
import{ View, StyleSheet, Text, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import QrCodeScanner from 'react-native-qrcode-scanner'
import RectangleQR from '../components/rectangleQR'


export default class QrReader extends Component {
  _onRead(e) {
    Actions.place({ placeId: e.data })
  }
  render() {
    return(
      <View style = { styles.main } >
          {
            // <Text style = { styles.text } onPress = {()=> Actions.place({ placeId: 'ju5Xg3XSRy' })}> Test </Text>
          }
            
          <QrCodeScanner
            cameraStyle = { styles.qrContainer}
            customMarker = { <RectangleQR /> }
            reactivate = { false }
            onRead = { this._onRead.bind(this) }
            showMarker = { true } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  qrContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingBottom: 50,
  },
  rectangle: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: '#fff'
  },
  text: {
    marginTop: 55,
    padding: 10,
  }
})