import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native'
import IconText from '../iconText'
import Item from './item'
import { Actions } from 'react-native-router-flux'
import { phonecall } from 'react-native-communications'

export default class PlaceBoxInfo extends Component {
  constructor(props) {
    super(props)
    this.showMap = this.showMap.bind(this)
  }

  viewWebSite () {
    let { website } = this.props
   Actions.website({ websiteUri: website })
  }

  showMap () {
    let { latitude, longitude } = this.props.location
    let url = ''
    let os = Platform.OS
    if (os === 'android') {
      url = `geo:${latitude}, ${longitude}`
    } else {
      url = `http://maps.apple.com/?ll=${latitude},${longitude}`
    }
    Linking.openURL(url)
  }

  callPlace () {
    let { phone } = this.props
    phonecall(phone, false)
  }
  render() {
    return(
      <View  style = { styles.container }>
        <View style = { styles.containerTitle }>
          <Text style = { styles.title }> {this.props.title} </Text>
        </View>
        <View>
          <TouchableOpacity onPress = {() => this.showMap()}>
            <Item icon = 'map-marker'  text1 = { this.props.address } />
          </TouchableOpacity>
          <TouchableOpacity onPress = { () => this.callPlace() } >
            <Item icon = 'phone'  text1 = { this.props.phone } />
          </TouchableOpacity>
          {/*<Item icon = 'clock-o'  text1 = '8:00 AM - 12:00 PM ' text2 = '2:00 AM - 6:00 PM'/> */}
          <TouchableOpacity onPress = {() => this.viewWebSite( )}>
            <Item icon = 'globe'  text1 =  '' text2 = { this.props.website } />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    elevation: 3,
    paddingBottom: 12,
    marginBottom: 20,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.13)',
    shadowOpacity: .9,
  },
  containerTitle: {
    flex: 1,
    backgroundColor: '#f98d2c',
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,


  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 10,
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '500',

  },
  containerInfo: {
    //borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,

  },
  iconInfo: {
    //borderWidth: 1,
    //borderColor: 'blue',
    color: '#f98d2c',
    height: 25,
    width: 25,
    textAlign: 'center',
  },
  textContainer: {
    //borderWidth: 1,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    flex: 1


  },
  textInfo: {
    lineHeight: 30,
    fontSize: 18,
    color: '#454545',
    paddingBottom: 5,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },
  textInfoLast: {
    lineHeight: 30,
    fontSize: 18,
    color: '#454545',
    paddingBottom: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },

})

