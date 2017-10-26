import React, { Component } from 'react'
import{
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'
import { DestroySession } from '../../utils'


const { width, height } = Dimensions.get('window')
export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  about () {
    Actions.about()
  }

  settings () {
    Actions.settings()
  }

  async destroySession () {
    let out = await DestroySession()
    if (out) {
      return Actions.reset('login')
    }
    return Alert.alert(
      'lo sentmimos :(',
      'tenemos un problema para cerrar tu sesion, por favor intentalo mas tarde'
    )
  }

  map () {
    Actions.drawerClose( )
    Actions.map()
  }

  render() {
   return(
     <View style={{ backgroundColor: '#2b2631' , flex: 1, paddingVertical: 20,}}>
      <View style = {[ styles.itemImage,]}>
        <Image source = {{ uri: 'https://lorempixel.com/120/120/' }} style = { styles.imageProfile } />
        <Text style = { styles.textPerfil }>PERFIL</Text>
      </View>
      <View style = { styles.item }>
         <Icon 
            style = { styles.iconMenu }
            name='heart' 
            size={25} 
            color= '#d63636'
            />
        <Text style = { styles.text }>MIS FAVORITOS</Text>
      </View>

      <TouchableOpacity onPress=  { () => this.map() }>
        <View style = { styles.item }>
          <Icon
            style={ styles.iconMenu }
            name='map'
            size={25}
            color='#6473e1' />
          <Text style={styles.text}>MAPA</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => this.settings()}>
        <View style = { styles.item }>
          <Icon 
            style = { styles.iconMenu } 
            name = 'cog' 
            size = {25}  
            color = '#a8a8a8'/>
          <Text style = { styles.text }>AJUSTES</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => this.about()} >
        <View style = { styles.item }>
           <Icon 
            style = { styles.iconMenu } 
            name='info-circle' 
            size={25} 
            color= '#ffd39c'/>
          <Text style = { styles.text }>ACERCA DE SKRAPP</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = { () => this.destroySession() }>
        <View style = { styles.item }>
         <IonicIcon 
          style = { styles.iconMenu } 
          name='md-log-out' 
          size={25} 
          color= '#ff5353'/>
          
          <Text style = { styles.text }>CERRAR SESIÓN</Text>
        </View>
      </TouchableOpacity>

    </View>
   )
  }
}

const styles = StyleSheet.create({
  itemImage: {
    height: (height - 10) / 5.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: (height - 10) / 7.6,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
    // marginTop: 15,
    // marginBottom: 5,
    marginTop: 30,
    backgroundColor: 'white'
  },
  textPerfil: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 20,
    marginTop: 15,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    letterSpacing: .2
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    letterSpacing: .5,
    marginTop: 10,
  },
  iconMenu: {
    width: 25,
    height: 25,
    // borderWidth: 1,
    textAlign: 'center',
  }
})