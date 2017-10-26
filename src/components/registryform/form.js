import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  Alert
} from 'react-native'
import { Buttom } from '../buttom'
import { Actions, ActionConst } from 'react-native-router-flux'
import { SaveTokens } from '../../utils'
const { width, height } = Dimensions.get('window')
import Api from '../../api'

export default class RegistryForm extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder='Nombre completo'
          style={styles.input}
          placeholderTextColor='#ffffff'
          underlineColorAndroid='transparent'
          // value={this.state.username}
          // onChangeText={username => this.setState({ username })}
          selectionColor='black'
        />
        <TextInput
          placeholder='Correo electronico'
          style={styles.input}
          placeholderTextColor='#ffffff'
          underlineColorAndroid='transparent'
          // value={this.state.username}
          // onChangeText={username => this.setState({ username })}
          selectionColor='black'
        />
        <TextInput
          placeholder='Contraseña'
          style={[styles.input, { marginTop: 0 }]}
          secureTextEntry={true}
          placeholderTextColor='#ffffff'
          underlineColorAndroid='transparent'
          selectionColor='black'
          // value={this.state.password}
          // onChangeText={password => this.setState({ password })}
        />
        <View>
          <Buttom styleButtom={[styles.btn, styles.btnSubmit,]} styleText={[[styles.textBtn, { flex: 1 }]]} text='Crear Cuenta' handlePress={this.handleLogin} />
        </View>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  
  form: {
    height: (height / 2.75),
    alignItems: 'center',
    // borderWidth: 1,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    color: '#fff',
    width: width - 40,
    height: 45,
    borderRadius: 4,
    paddingLeft: 20,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    marginBottom: 15,
  }, 
  btnSubmit: {
    backgroundColor: '#f98d2c',
  },
  btn: {
    width: width - 40,
    marginTop: 15,
    height: 45,
    borderRadius: 40,
    ...Platform.select({
      ios: {
        paddingTop: 13
      },
    }),
  },
  textBtn: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
  },
})