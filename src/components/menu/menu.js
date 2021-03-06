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
import { DestroySession, AlreadyUser, getProfile } from '../../utils'

const { width, height } = Dimensions.get('window')
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      picture: require('../../../assets/images/avatar.png'),
      login: false
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
    let login = await AlreadyUser()
    if (login) {
      let profile = await getProfile()
      let picture = profile.picture? { uri:  profile.picture.data.url  } : this.state.picture
      this.setState({ picture, username: profile.name, login })
    }
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
  
  signIn(){
    Actions.login({ ensureLogin: true, type: 'replace' })
  }
  
  map () {
    Actions.drawerClose()
    Actions.map()
  }


  render() {
   return(
     <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#2b2631'}}>
      <View style={{ flex: 1, paddingVertical: 20, }}>
          <View style = {[ styles.itemImage]}>
            <Image source = { this.state.picture } style = { styles.imageProfile } defaultSource = {require('../../../assets/images/avatar.png')}/>
           <Text style={styles.textPerfil}> {this.state.username } </Text>
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
         <TouchableOpacity onPress={() => this.state.login? this.destroySession():this.signIn()}>
           <View style={styles.item}>
             <IonicIcon
               style={styles.iconMenu}
               name={this.state.login ? 'md-log-out' :'md-log-in'}
               size={25}
               color={this.state.login ? '#ff5353' : '#f98d2c'} />
             <Text style={styles.text}> {this.state.login? 'CERRAR SESIÓN' : 'INICIAR SESIÓN'} </Text>
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
  },
  item: {
    height: (height - 10) / 7.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 5,
    marginTop: 60,
  },
  textPerfil: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 60,
    marginTop: 10,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
    letterSpacing: .5,
    marginTop: 10,
  },
  iconMenu: {
    width: 25,
    height: 25,
    textAlign: 'center',
  }
})