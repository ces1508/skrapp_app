import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native'


const { width } = Dimensions.get('window')

export default class Load extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <View style = { styles.main }  >
          <View style = { styles.iconContainer } >
            <View style = { styles.image } />
          </View>
          <View style = {{ flexDirection: 'column', flex: 1, paddingVertical: 20 }} >
            <View style = { styles.title } />
            <View style = { styles.title } />
          </View>
        </View>
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
  },
  image:  {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f4f4f4',
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'rgba(0,0,0,.18)',
    shadowOpacity: 1.0,
  },
  title: {
    backgroundColor: '#f4f4f4',
    width: width - 120,
    height: 20,
    marginBottom: 15,
    borderRadius: 10
  }
})