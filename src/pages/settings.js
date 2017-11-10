import React,  { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  ScrollView,
  Platform
} from 'react-native'
import Api from '../api'
import CheckBox from '../components/checkbox'
import HeaderProfileUser from '../components/headerProfileUser'
import { getUnidad, getMapStyle, setMapStyle, setUnidad} from '../utils'
import Avatar from '../../assets/images/avatar.png'
const { width, height } = Dimensions.get('window')

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unidad: '',
      mapStyle: '',
      'username': '',
      profileImage: '',
      social: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.getValues = this.getValues.bind(this)
  }

  async getValues () {
    let [unidad, mapStyle] = await Promise.all([getUnidad(), getMapStyle()])
    this.setState({ unidad, mapStyle })
  }

  async getProfile() {
    let profile = await Api.getProfile()
    if (profile.authData) {
        let { access_token } = profile.authData.facebook
        let request = await fetch(`https://graph.facebook.com/v2.9/me?access_token=${access_token}&fields=id,email,name,picture{url}`)
        let fbProfile = await request.json()
        this.setState({ username: fbProfile.name , profileImage: fbProfile.picture.data.url, social: true})
    } else {
      this.setState({ username: profile.username })

    }
  }
  async handleChange(med) {
    await setUnidad(med)
    this.setState({ unidad: med })
  }
  async handleChangeMap(type) {
    await setMapStyle(type)
    this.setState({ mapStyle: type })
  }

  componentWillMount () {
    this.getValues()
  }

  componentDidMount() {
    this.getProfile()
  }

  render() {
    let { unidad, mapStyle } = this.state
    return(
      <View>
        <ScrollView>
          <View style = { styles.hedaer } >
            <HeaderProfileUser height = { height / 3}  username = { this.state.username } avatar = { this.state.social? {uri: this.state.profileImage} : Avatar}/>
          </View>
          <View style = { styles.settings }>
            <View style = { styles.settingCard }>
              <View style = { styles.section }>
                <Text style = { styles.sectionTitle } > Unidad de Distancia </Text>
                  <View style = {{ marginTop: 15}}>
                    <CheckBox  checked = {unidad === 'km'} title = 'Kilometros' handleClick = {() => this.handleChange('km') }/>
                    <CheckBox checked = {unidad === 'mi'} title = 'Millas' handleClick = {() => this.handleChange('mi')} />
                  </View>
              </View>
              <View style = { styles.line  }></View>
              <View style = { styles.section }>
                <Text style = { styles.sectionTitle } >Estilo del mapa</Text>
                <View style = {{ marginTop: 15 }}>
                  <CheckBox  checked = { mapStyle === 'satellite'} title = 'Satelite' handleClick = {() => this.handleChangeMap('satellite') }/>
                  <CheckBox checked = { mapStyle === 'standard' } title = 'Normal' handleClick = {() => this.handleChangeMap('standard')} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hedaer: {
    height: (height )/ 3,
    backgroundColor: 'gray'
  },
  settings: {
    padding: 10
  },
  settingCard: {
    backgroundColor: '#fefefe',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 15
  },
  sectionTitle: {
    fontSize: 20,
    color: '#454545',
    textAlign: 'left',
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '500'
  },
  line: {
    marginTop: 30,
    marginBottom: 15,
    borderWidth: 0.5,
    backgroundColor: '#e1e1e1'
  }
})