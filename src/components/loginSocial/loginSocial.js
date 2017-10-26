import React, { Component } from 'react'
import { 
  View,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native'
import Line from './line'
import ButtomIcon from '../buttom'

const { width, height } = Dimensions.get('window')

export default class LoginSocial extends Component {
  render() {
    return(
      <View style = { styles.container }>
        <Line text = 'o' />
        <ButtomIcon  styleBtn = { styles.btnSocial }  styleText = { styles.textBtn } icon = 'facebook-official' text = 'Iniciar sesión con Facebook' />
        <ButtomIcon  styleBtn = {[ styles.btnSocial, styles.btnLoginGoogle ]}  styleText = {[styles.textBtn, styles.textBtnGoogle]} icon = 'google' text = 'Iniciar sesión con Google' colorIcon = '#7f7f7f' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    alignItems: 'center',
  },
  btnSocial: {
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