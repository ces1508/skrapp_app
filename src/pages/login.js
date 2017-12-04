import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  Platform,
  StatusBar,
  ScrollView 
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LoginForm from '../components/loginForm'
import ButtomIcon, { Buttom } from '../components/buttom'
import LoginSocial from '../components/loginSocial'
import SectionRegister from '../components/SectionRegister'
const { width, height } = Dimensions.get('window')
import { Actions } from 'react-native-router-flux'
export default class LoginView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      
      <ImageBackground  source = { require('../../assets/images/bglogin.png') } style = { styles.background } >
        <ScrollView > 
          { Platform.OS === 'android'?
              <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent={true}
              />
            : null
          }
        
            {this.props.ensureLogin?  
              <View style = { styles.back }>
                <Icon name='ios-arrow-back-outline' size={35} color='#fff' onPress = {() => Actions.drawer() }  />
              </View>
              : null
            }
            <View style = {{ flex: 1 }}>
              <View style = { styles.containerLogo }>
                <Image  style = { styles.logo } source = { require('../../assets/images/skrapp.png') } resizeMode = 'contain' />
              </View>
              <LoginForm />
              <LoginSocial {...this.props}/>
              <SectionRegister />
            </View>
          </ScrollView>
      </ImageBackground>
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
    // borderWidth: 1,

    height: ( height / 3  ),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 11,
  },
  logo: {
    width: 150,
    zIndex: 100,
    height: 150,
    // borderWidth: 1,
  },
  form: {
    height: ( height / 3 ),
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
    width: width - 40,
    height: 45,
    borderRadius: 5,
    paddingLeft: 20,
  },
  btnSubmit: {
    backgroundColor: '#f98d2c',
  },
  btn: {
    width: width - 40,
    marginTop: 15,
    height: height <= 480 ? 35 : 45,
    borderRadius: 40,
    ...Platform.select({
      ios: {
        paddingTop: height <= 480 ? 7 : 11
      },
    }),
  },
  textBtn: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
  },
  remember: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign:'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
  },
  socialLogin: {
    height: height / 3,
    alignItems: 'center',
  },
  btnSocial: {
    width: width- 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2159c9',
    marginBottom: 15,
  },
  btnLoginGoogle: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingRight: 30,
  },
  textBtnGoogle: {
    color: '#7f7f7f',
  },
  register: {
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    left: 0,
    right: 0,
    bottom: 0,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    height: 0.5,
    backgroundColor: '#fff',
    flex: 1,
  },
  back: {
    position: 'absolute', 
    top: 20, 
    left: 0, 
    width: 40, 
    paddingLeft: 10, 
    backgroundColor: 'transparent',
    zIndex: 100,
  }
})