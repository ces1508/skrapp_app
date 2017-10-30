import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <ScrollView contentContainerStyle = { styles.container }>
          <View style = { styles.containerImage }>
            <Image style = { styles.image } source = {require('../../assets/images/skrappcolor.png')} />
          </View>
          <View style = {{ marginTop: 20 }} > 
            <Text style = { styles.name }> Skrapp Colombia </Text>
            <Text style = { styles.version }> Versión 3.2.0 </Text>
          </View>
          <View>
            <Text style = { styles.description }> Finding the perfect learning tool for Flash is a
              daunting task to any novice web developer. One can find help
              in a number of ways through books, friends and private tutors.
            </Text>
          </View>
          <View  style = { styles.social }>
            <Icon name = 'facebook-official' size = {30} color = '#000333'/>
            <Icon name = 'twitter' size = {30} color = '#000333' />
            <Icon name = 'instagram' size = {30} color = '#000333' />
            <Icon name = 'youtube-play' size = {30} color = '#000333' />
          </View>
          <View style = { styles.copyright }>
            <Icon name = 'copyright' size = {20}/>
            <Text style = { styles.copyrightText }>2017 Todos los derechos reservados.</Text>
          </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fefefe'
  },
  name: {
    color: '#454545',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    letterSpacing: .25,
    marginTop: 10,
  },
  version: {
    marginTop: 10,
    color: '#7d7d7d',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    letterSpacing: .25,
  },
  containerImage: {
    marginTop: 60
  },
  image: {
    width: 200,
    height: 200
  },
  description: {
    color: '#454545',
    fontSize: 17,
    marginTop: 20,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    lineHeight: 25,
  },
  social: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    width: 200,
  },
  copyright: {
    marginTop: 30,
    flexDirection: 'row',
  },
  copyrightText: {
    
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    letterSpacing: .25,
    color: '#454545',
    marginLeft: 10,
  }
})
