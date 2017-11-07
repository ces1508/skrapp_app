import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import IconText from '../iconText'

export default class PlaceBoxSocial extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style = { styles.container }>
        <View style = { styles.containerTitle }>
          <Text style = { styles.title }> { this.props.title } </Text>
        </View>

        <View>
          <View style = { styles.containerSocial }>
            <IconText
              customStylesIcon = {styles.iconSocial}
              icon = 'facebook'
              text = ''
              iconSize = {25}
              handleClick = {() => null} />

            <View style = { styles.containerText }>
              <Text style = { styles.textSocial }>/cristian.segura</Text>
            </View>

          </View>

          <View style = {styles.containerSocial}>

            <IconText
              customStylesIcon = {styles.iconSocial}
              icon = 'instagram'
              text = ''
              iconSize = {25}
              handleClick = {() => null} />

            <View style = { styles.containerText }>
              <Text style = { styles.textSocial }>@christianseguras</Text>
            </View>

          </View>


          <View style = { styles.containerSocial }>
            <IconText
            customStylesIcon = { styles.iconSocial }
            icon = 'twitter'
            text = ''
            iconSize = {25}
            handleClick = {() => null} />

            <View style = { styles.containerText }>
                <Text style = { styles.textSocial }> @christianseguras </Text>
            </View>

          </View>


        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    paddingBottom: 12,
    marginBottom: 20,
    elevation: 3,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.13)',
    shadowOpacity: .9,
  },
  containerTitle: {
    flex: 1,
    backgroundColor: '#f98d2c',
    height: 40,
    paddingTop: 8,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '500',

  },
  containerSocial: {
    //borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,


  },
  iconSocial: {
    //borderWidth: 1,
    //borderColor: 'red',
    color: '#f98d2c',
    width: 25,
    height: 25,
    textAlign: 'center'

  },
  containerText: {
    borderBottomWidth: 1,
    borderColor: '#DDD',
    flex: 1
  },
  textSocial: {
    //borderWidth:1,
    fontSize: 18,
    color: '#454545',
    lineHeight: 25,
    marginTop: 25,
    paddingBottom: 20,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',


  }
})
