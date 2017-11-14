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

  async handleFacebookLogin() {
    try {
      let result = await LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_about_me', 'user_birthday'])
      if (result.isCancelled) {
      Alert.alert(
        'lo sentimos',
        'se ha cancelado el inicio de sesion'
      )
      } else {
      let fbTokens = await AccessToken.getCurrentAccessToken()
      let request = await fetch(`https://graph.facebook.com/v2.11/me?fields=name,about,address,birthday,age_range,email,gender,hometown&access_token=${fbTokens.accessToken}`)
      let fbProfiele = await request.json()
      delete fbProfiele.email
      delete fbProfiele.id
      let sigin = await Api.loginFacebook(fbTokens, fbProfiele)
      if (sigin.error) {
          if (sigin.code === 203) {
           return Alert.alert(
             'Lo sentimos, no hemos podido completar tu registro',
             'el correo ya se encutra registrado'
            )
          }
          Alert.alert(
            'lo sentimos',
            'ocurrio un error inesperado, por favor intenta mas tarde'
          )
        } else {
          let save = await SaveTokens(sigin)
          if (save) {
            Actions.drawer({ type: 'reset' })
          } else {
            Alert.alert(
              'lo sentimos',
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
  render() {
    return(
      <View style = { styles.container }>
        <Line text = 'o' />
        <TouchableOpacity onPress = {() => this.handleFacebookLogin()}>
          <ButtomIcon  styleBtn = { styles.btnSocial }  styleText = { styles.textBtn } icon = 'facebook-official' text = 'Iniciar sesión con Facebook' onPress = { this.handleFacebookLogin } />
        </TouchableOpacity>
        {
          // <ButtomIcon
          //   styleBtn = {[ styles.btnSocial, styles.btnLoginGoogle ]}
          //   styleText = {[styles.textBtn, styles.textBtnGoogle]}
          //   icon = 'google' text = 'Iniciar sesión con Google'
          //    colorIcon = '#7f7f7f' />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    alignItems: 'center'
  },
  btnSocial: {
    marginTop: 20,
    width: width- 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2159c9',
    marginBottom: Platform.OS === 'android' ? 10 : 15,
    paddingLeft: Platform.OS === 'android' ? 20 : 0,
  },
  btnLoginGoogle: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingRight: 30,
  },
  textBtnGoogle: {
    color: '#454545',
    paddingLeft: 10,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
  }
})
