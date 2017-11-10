import React, { Component } from 'react'
import{
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  ScrollView
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
  myFavorites() {
    Actions.myFavorites()
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
     <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#2b2631'}}>
      <View style={{ flex: 1, paddingVertical: 20,}}>
          <View style = {[ styles.itemImage,]}>
            <Image source = {{ uri: 'https://lorempixel.com/120/120/' }} style = { styles.imageProfile } />
            <Text style = { styles.textPerfil }>JUAN LIZCANO</Text>
          </View>
        <TouchableOpacity onPress={() => this.myFavorites()}>
          <View style = { styles.item }>
            <IonicIcon
                style = { styles.iconMenu }
                name='md-heart'
                size={27}
                color= '#d63636'
                />
            <Text style = { styles.text }>MIS FAVORITOS</Text>
          </View>
         </TouchableOpacity>

        <TouchableOpacity onPress=  { () => this.map()}>
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
     </ScrollView>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#2b2631',
  },
  itemImage: {
    height: (height - 10) / 5.5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: Platform.OS === 'android' ? 20 : 30,
    // borderWidth: 1
  },
  item: {
    height: (height - 10) / 7.4,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'white'
  },
  imageProfile: {
    width: 60,
    height: 60,
    // backgroundColor: 'white',
    // borderRadius: Platform.OS === 'android' ? 50 : 30,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
    // marginTop: 15,
    marginBottom: 5,
    marginTop: 60,
  },
  textPerfil: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 60,
    marginTop: 5,
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '400',
    letterSpacing: .2
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'RobotoCondensed-Regular',
    fontWeight: '400',
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