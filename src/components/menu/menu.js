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
import { getProfile } from '../../utils'


const { width, height } = Dimensions.get('window')
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      picture: require('../../../assets/images/avatar.png')
    }
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

  async componentWillMount() {
    let profile = await getProfile()
    let picture = profile.picture? { uri:  profile.picture.data.url  } : this.state.picture
    this.setState({ username: profile.name, picture })
  }
  async destroySession () {
    let out = await DestroySession()
    if (out) {
      return Actions.reset('login')
    }
    return Alert.alert(
      'Lo sentmimos :(',
      'tenemos un problema para cerrar tu sesión, por favor intentalo más tarde'
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
          <View style = {[ styles.itemImage]}>
            <Image source = { this.state.picture } style = { styles.imageProfile } defaultSource = {require('../../../assets/images/avatar.png')}/>
           <Text style={styles.textPerfil}> {this.state.username.toUpperCase() } </Text>
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
    marginTop: 35
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
    marginTop: 10,
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