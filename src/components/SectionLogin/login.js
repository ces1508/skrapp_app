import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class SectionLogin extends Component {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    Actions.login()
    // alert('enviando a la vista de login')
  }

  render() {
    return (
      <View style={styles.login} >
        <TouchableOpacity onPress={() => Actions.pop() }>
          <View style = { styles.row }>
            <Text style={ styles.textBtn } > ¿Ya eres parte de Skrapp?  </Text>
            <Text style={ [styles.textBtn, styles.textBtnis]}> Iniciar sesión </Text>
          </View>
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
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row',
    padding: 10,
  },
  textBtn: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
  },
  textBtnis: {
    fontWeight: 'bold',
    // letterSpacing: .5,
  }
})