import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  Alert,
  ActivityIndicator
} from 'react-native'
import { Buttom } from '../buttom'
import { Actions, ActionConst } from 'react-native-router-flux'
import { SaveTokens } from '../../utils'
const { width, height } = Dimensions.get('window')
import Api from '../../api'
export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loading: false
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.renderButtom = this.renderButtom.bind(this)
  }

  async handleLogin() {
    let { username, password } = this.state
    if (username === '' || password === '') {
      return Alert.alert(
        'ups !',
        'debes ingresar todos los campos para poder iniciar sesion'
      )
    }
    this.setState({ loading: true })
    let signin = await Api.signIn(username, password)
    this.setState({ loading: false })
    if (signin.error) {
      Alert.alert(
        signin.title,
        signin.message
      )
    } else {
      let data = signin
      let user = await SaveTokens(data)
      Actions.drawer({ type: 'reset' })
    }
  }

  renderButtom () {
    let { loading } = this.state
    if (loading) {
      return (
        <View>
          <ActivityIndicator />
          <Text style = { styles.textBtn }> iniciando sesion ... </Text>
        </View>
      )
    }
    return <Buttom
      styleButtom = {[styles.btn, styles.btnSubmit, ]}
      styleText = {[[ styles.textBtn, { flex: 1 } ]]}
      text = 'Acceder'
      handlePress = { this.handleLogin }
    />
  }
  render() {
    return(
      <View style = { styles.form }>
        <TextInput
          placeholder = 'Correo Electronico'
          style = { styles.input }
          placeholderTextColor = '#ffffff'
          underlineColorAndroid = 'transparent'
          value = { this.state.username }
          onChangeText = { username => this.setState({ username })}
          selectionColor = 'black'
        />
        <TextInput
          placeholder = 'Contraseña'
          style = {[styles.input, {marginTop: 20}]}
          secureTextEntry = {true}
          placeholderTextColor = '#ffffff'
          underlineColorAndroid = 'transparent'
          selectionColor = 'black'
          value = { this.state.password }
          onChangeText = { password => this.setState({ password })}
          />
        <View>
          {this.renderButtom()}
        </View>
        <View>
          <Text style = { styles.remember }> ¿No recuerdas tu Contraseña? </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    height: ( height/3 ),
    alignItems: 'center',
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
        paddingTop: 11
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
  remember: {
    fontSize: 16,
    color: '#fff',
    marginTop: Platform.OS === 'android' ? 10 : 20,
    textAlign:'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',

  },
})