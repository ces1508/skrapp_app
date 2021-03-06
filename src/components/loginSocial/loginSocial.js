import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  Alert
} from 'react-native'
import Line from './line'
import ButtomIcon from '../buttom'
import FBDSK, { LoginManager, AccessToken }from 'react-native-fbsdk'
import Api from '../../api'
import { SaveTokens } from '../../utils'
import { Actions } from 'react-native-router-flux'
const { width, height } = Dimensions.get('window')

export default class LoginSocial extends Component {
  whitOutLogin(){
    Actions.drawer()
  }

  static defaultProps = {
    ensureLogin: false
  }
  
  async handleFacebookLogin() {
    try {
      let result = await LoginManager.logInWithReadPermissions(['public_profile'])
      if (result.isCancelled) {
      Alert.alert(
        'lo sentimos',
        'se ha cancelado el inicio de sesion'
      )
      } else {
      let fbTokens = await AccessToken.getCurrentAccessToken()
      let request = await fetch(`https://graph.facebook.com/v2.11/me?fields=name,picture&access_token=${fbTokens.accessToken}`)
      let fbProfiele = await request.json()
      let sigin = await Api.loginFacebook(fbTokens, fbProfiele)
      if (sigin.error) {
          if (sigin.code === 203) {
           return Alert.alert(
             'Lo sentimos, no hemos podido completar tu registro',
             'el correo ya se encutra registrado'
            )
          }
          // console.log('error ', sigin)
          Alert.alert(
            'Lo sentimos',
            'ocurrio un error inesperado, por favor intenta mas tarde'
          )
        } else {
          let save = await SaveTokens(sigin)
          if (save) {
            Actions.drawer({ type: 'reset' })
          } else {
            console.log('error save tokens ' , save)
            Alert.alert(
              'Lo sentimos',
              'ocurrio un error inesperado, por favor intenta mas tarde'
            )
          }
        }
      }
    } catch(e) {
      // console.log(e)
      Alert.alert(
        ' uups!!! ocurrio un error',
        e.message
      )
    }
  }

  renderWithOutLogin () {
    let { ensureLogin } = this.props
    if (!ensureLogin) {
      return <TouchableOpacity onPress={() => this.whitOutLogin()}>
        <ButtomIcon
          styleBtn={[styles.btnSocial, styles.btnLoginGoogle]}
          styleText={[styles.textBtn, styles.textBtnGoogle]}
          icon='user' text='Continuar sin registro'
          iconSize = { 25 }
          colorIcon='#f98d2c' />
      </TouchableOpacity>
    }
    return null
  }
  render() {
    return(
      <View style = { styles.container }>
        <Line text = 'o' />
        <TouchableOpacity onPress = {() => this.handleFacebookLogin()}>
          <ButtomIcon  styleBtn = { styles.btnSocial } iconSize = { 25 } colorIcon = "#fff" styleText = { styles.textBtn } icon = 'facebook-official' text = 'Iniciar sesión con Facebook' onPress = { this.handleFacebookLogin } />
        </TouchableOpacity>
        { this.renderWithOutLogin() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: height / 2.9,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red'

  },
  btnSocial: {
    marginTop: height <= 480 ? 0 : 20,
    width: width- 40,
    height: height <= 480 ? 35 : 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2159c9',
    marginBottom: Platform.OS === 'android' ? 10 : 0,
    paddingLeft: Platform.OS === 'android' ? 20 : 0,
  },
  btnLoginGoogle: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingRight: 20,
  },
  textBtnGoogle: {
    color: '#454545',
    paddingLeft: 10,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '500',
  }
})

