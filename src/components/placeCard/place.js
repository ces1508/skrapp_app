import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import Rating from 'react-native-easy-rating'

export default class PlaceCard extends Component {
  render() {
    return(
      <View style = { styles.place }>
        <View style = { styles.content }>
          <View style =  {{ flexDirection: 'row',}}>
            <Icons name='map-marker' size={17} color= '#7d7d7d' />
            <Text style = { styles.text }
              ellipsizeMode='tail'
              numberOfLines={1}
            > { this.props.address } </Text>
          </View>
          <Rating
            rating = { this.props.ranking }
            editable = {false}
            iconWidth = { 15 }
            iconHeight = { 15 }
            max = { 5 }
            onRate = { () => null }
            iconSelected = { require('../../../assets/images/star.png') }
            style = {{ marginTop: 5,}}
            />

        </View>
        {
          this.props.showDistance?(
            <View style = { styles.distance }>
              <Text style={styles.textDistance} > { this.props.distance }  </Text>
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
    marginTop: Platform.OS === 'android'? -12: -8,
    // borderWidth: 1,    
  },
  content: {
    flexDirection: 'column',
    flex: 1,    
  },
  distance: {
    
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 3,
    marginRight: 5,
    color:'#7d7d7d',
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '400',
  },
  textDistance: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#5a5a5a',
    textAlign: 'center',
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '500'
  },
  textUnidad:{
    color: '#9f9f9f',
    fontFamily: Platform.OS === 'android'? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '500',
    textAlign: 'center'
  }

})