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
    this.state = {
      name: '',
      password: '',
      email: ''
    }
    this.handleSubmit  = this.handleSubmit.bind(this)
  }

  async handleSubmit () {
    let { name, email, password } = this.state
    if (name === '' || email === ''  || password === '') {
      return Alert.alert(
        'upps !',
        'debes llenar todos los campos, para poder registrarte'
      )
    }
    let data = {
      username: email, 
      password, 
      name, 
      email,
      city: ''
    }
    let signup = await Api.saveUser(data)
    // console.log(signup)
    if (signup.status === 'success') {
      let save = await SaveTokens(signup.data)
      if (save) {
        return Actions.categories()
      } else {
        Alert.alert(
          'ups! lo sentimos',
          'tenemos un error para guardar tu sesion, por favor intentalo mas tarde'
        )
      }
    } else {
      if (signup.status === 'failed' && signup.data.code === 202) {
        Alert.alert(
          'Ups !',
          'ese usuario ya se encuetra creado en nuestro sistema, inicia sesion :D'
        )
      } else {
        Alert.alert(
          'ups!',
          signup.data.message
        )
      }
    }

  }
  render() {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder='Nombre completo'
          style={styles.input}
          placeholderTextColor='#ffffff'
          underlineColorAndroid='transparent'
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          selectionColor='black'
        />
        <TextInput
          placeholder='Correo electrónico'
          style={styles.input}
          placeholderTextColor='#ffffff'
          underlineColorAndroid='transparent'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          selectionColor='black'
        />
        <TextInput
          placeholder='Contraseña'
          style={[styles.input, { marginTop: 0 }]}
          secureTextEntry={true}
          placeholderTextColor='#ffffff'
          underlineColorAndroid='transparent'
          selectionColor='black'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <View>
          <Buttom 
            styleButtom={[styles.btn, styles.btnSubmit]} 
            styleText={[[styles.textBtn, { flex: 1 }]]} text='Crear Cuenta' 
            handlePress={this.handleSubmit} 
          />
        </View>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  
  form: {
    height: (height / 3),
    alignItems: 'center',
    // borderWidth: 1,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    color: '#fff',
    width: width - 40,
    height: height <= 480 ? 35 : 45,
    borderRadius: 4,
    paddingLeft: 20,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
    marginBottom: 15,
  }, 
  btnSubmit: {
    backgroundColor: '#f98d2c',
  },
  btn: {
    width: width - 40,
    marginTop: height <= 480 ? -5 : 10,
    height: height <= 480 ? 35 : 45,
    borderRadius: 40,
    ...Platform.select({
      ios: {
        paddingTop: height <= 480 ? 7 : 11
      },
    }),
  },
  textBtn: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '500',
  },
})