import React,  { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

import CheckBox from '../components/checkbox'
import HeaderProfileUser from '../components/headerProfileUser'
const { width, height } = Dimensions.get('window')

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      km: true,
      milla: false,
      sat: false,
      normal: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(med) {
    this.setState({
      km: !this.state.km,
      milla: !this.state.milla
    })
  }
  handleChangeMap(type) {
    this.setState({
      sat: !this.state.sat,
      normal: !this.state.normal
    })
  }

  render() {
    return(
      <View>
        <View style = { styles.hedaer } >
          <HeaderProfileUser height = { height / 3} />
        </View>
        <View style = { styles.settings }>
          <View style = { styles.settingCard }>
            <View style = { styles.section }>
              <Text style = { styles.sectionTitle } > Unidad de Distancia </Text>
                <View style = {{ marginTop: 15}}>
                  <CheckBox  checked = {this.state.km} title = 'Kilometros' handleClick = {() => this.handleChange('km') }/>
                  <CheckBox checked = {this.state.milla} title = 'Millas' handleClick = {() => this.handleChange('millas')} />
                </View>
            </View>
            <View style = { styles.line  }></View>
            <View style = { styles.section }>
              <Text style = { styles.sectionTitle } >Estilo del mapa</Text>
              <View style = {{ marginTop: 15 }}>
                <CheckBox  checked = {this.state.sat} title = 'Satelite' handleClick = {() => this.handleChangeMap('km') }/>
                <CheckBox checked = {this.state.normal} title = 'Normal' handleClick = {() => this.handleChangeMap('millas')} />
              </View>
            </View>
          </View>
        </View>
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
    fontFamily: 'Roboto-Medium',
    fontWeight: '500'
  },
  line: {
    marginTop: 30,
    marginBottom: 15,
    borderWidth: 0.5,
    backgroundColor: '#e1e1e1'
  }
})