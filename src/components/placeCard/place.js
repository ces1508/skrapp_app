import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import Star from '../star'

export default class PlaceCard extends Component {
  render() {
    console.log('show distance', this.props)
    return(
      <View style = { styles.place }>
        <View style = { styles.content }>
          <View style =  {{ flexDirection: 'row' }}>
            <Icons name='map-marker' size={17} color= '#7d7d7d' />
            <Text style = { styles.text }> { this.props.address } </Text>
          </View>
          <View style = {{ flexDirection: 'row' }}>
            <Star type = 'full' />
            <Star type = 'full' />
            <Star type = 'full' />
            <Star type = 'half' />
            <Star type = 'empty' />
          </View>
        </View>
        {
          this.props.showDistance?(
            <View style = { styles.distance }>
                <Text style = {styles.textDistance} > { this.props.distance }  </Text>
                <Text style= {styles.textUnidad} > { this.props.unidad } </Text>
            </View>
          ): null
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  place: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //paddingLeft: 6,
    //borderWidth: 2,
    //borderColor: 'red',
  },
  content: {
    flexDirection: 'column',
    flex: 1,
    //borderWidth: 1,
    //borderColor: 'green', 
  },
  distance: {
    //borderWidth: 1,
    //marginTop: 0

  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 4,
    color:'#7d7d7d',
    fontFamily: 'Roboto-Medium',
    fontWeight: '400'
    //borderWidth: 1,
    //borderColor: 'red',


  },
  textDistance: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#5a5a5a',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500'

    
  },
  textUnidad:{
    color: '#9f9f9f',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    textAlign: 'center'
    
  }

})