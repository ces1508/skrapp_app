import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
  Platform,
  ScrollView

} from 'react-native'
import RegistryForm from '../components/registryform'
import ButtomIcon, { Buttom } from '../components/buttom'
import LoginSocial from '../components/loginSocial'
import SectionLogin from '../components/SectionLogin'
const { width, height } = Dimensions.get('window')

export default class RegistryView extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <View> 
        <ImageBackground source={require('../../assets/images/bglogin.png')} style={styles.background} >
          <ScrollView>
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
              translucent={true}
            />
            <View style={{ flex: 1 }}>
              <View style={styles.containerLogo}>
                <Image style={styles.logo} source={require('../../assets/images/skrapp.png')} resizeMode = 'contain'/>
              </View>
              <RegistryForm />
              <LoginSocial />
              <SectionLogin />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  background: {
    width,
    height,
    marginTop: 0,
    paddingTop: 0
  },
  containerLogo: {
    flexDirection: 'row',
    paddingBottom: 6,

    height: (height / 3.1),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logo: {
    width: 150,
    zIndex: 100,
    height: 150,
  },
})