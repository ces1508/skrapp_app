import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native'

export default class SectionLogin extends Component {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    Alert.alert(
      'Lo sentimos :/',
      'aun no tenemos esa funcionalidad'
    )
  }

  render() {
    return (
      <View style={styles.login} >
        <TouchableOpacity onPress={() => this.handlePress()}>
          <Text style={styles.textBtn} > ¿Ya eres parte de Skrapp? Iniciar sesión </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,.5)',
    left: 0,
    right: 0,
    bottom: 0,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
  },
})