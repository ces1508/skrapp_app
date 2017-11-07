import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image } from 'react-native'



export default class Card extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    let { title, objectId, image } = this.props.data
    return(
      <TouchableOpacity onPress = {() => typeof(this.props.handleClick) === 'function'? this.props.handleClick(this.props.data) : null}>
        <View style = { styles.main }  >
          <View style = { styles.iconContainer } >
            <View style = { styles.image }>
                <Image
                  // source={{ uri: 'https://lorempixel.com/100/100' }}
                  source={{ uri: image.url }}

                  resizeMethod = 'resize'
                  resizeMode = 'stretch'

                  style = { {
                    backgroundColor: Platform.OS == 'android' ? 'transparent' : '#b2b2b2' ,
                    // borderColor: '#b2b2b2',
                    height: Platform.OS == 'android' ? 50 : 60,
                    width: Platform.OS == 'android' ? 50 : 60,
                    borderRadius: Platform.OS == 'android' ? 25 : 30,
                    overflow: 'hidden'
                } } />
            </View>
          </View>
          <View style = {{ flexDirection: 'column', flex: 1 }} >
            <View  style = { styles.textContainer }>
              <Text
                ellipsizeMode = 'tail'
                numberOfLines = {1}
                style={[styles.text, this.props.onlyTitle ? {
                  marginTop: 20,
                }: null]} >
                  { title }
              </Text>
            </View>
            {
              <View style = {{flex: 1, paddingTop: 5}} >
                {this.props.children}
              </View>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    height:100,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    borderRadius: 4,
    marginBottom:2,
    marginTop: 12,
  },
  iconContainer: {
    height: 100,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red'
  },
  image:  {
    height: Platform.OS == 'android' ? 50: 60,
    width: Platform.OS == 'android' ? 50 : 60,
    borderRadius: Platform.OS == 'android' ? 25 : 30,
    // overflow: 'hidden',
  },
  textContainer:{
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 0,
    alignItems: 'flex-start',

  },
  text: {
    paddingVertical: Platform.OS === 'android'? 15 : 20,
    textAlignVertical: 'bottom',
    fontSize: 17,
    color: '#454545',
    fontFamily: 'RobotoCondensed',
    fontWeight: '500',
    flex: 1,
    overflow: 'hidden',
  }
})