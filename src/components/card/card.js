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
              <Image source={{ uri: image.url }}  style = {[ styles.image, { backgroundColor: 'transparent' } ]} />
          </View>
          </View>
          <View style = {{ flexDirection: 'column', flex: 1 }} >
          
            <View  style = { styles.textContainer }>
              <Text 
                ellipsizeMode = 'tail' 
                numberOfLines = {1} 
                style = {styles.text} > 
                  { title } 
              </Text>
            </View>
            <View style = {{flex: 1, paddingTop: 5}} >
              {this.props.children}
            </View>
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
    // marginTop: 10,
    marginBottom:2,
    marginTop: 12,
 
  },
  iconContainer: {
    height: 100,
    width: 80,
  //borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  //paddingLeft: 10,
   //borderWidth: 1,
   //borderColor: 'red',

  },
  image:  {
    width: 60,
    height: 60,
    borderRadius: 30,
    //borderRadius: Platform.OS === 'android' ? 100 : 30,
    backgroundColor: '#f8f8f6',

    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'rgba(0,0,0,.18)',
    shadowOpacity: 1.0,
    
    
  },
  textContainer:{
    flex: 1,
    flexDirection: 'row',
    //borderWidth: 1,
    //borderColor: 'yellow',
    paddingBottom: 0,
    
    
  },
  text: {
    paddingVertical: Platform.OS === 'android'? 0 : 20,
    textAlignVertical: 'bottom',
    fontSize: 17,
    color: '#454545',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    flex: 1,
    overflow: 'hidden',
  }
})