import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconText from '../iconText'

export default class PlaceBoxInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View  style = { styles.container }>
        <View style = { styles.containerTitle }>
          <Text style = { styles.title }> {this.props.title} </Text>
        </View>
        <View>
          <View style={styles.containerInfo}>

            <IconText  
            customStylesIcon = { styles.iconInfo } 
            color = '#f98d2c' 
            icon = 'map-marker' 
            text = ' ' 
            iconSize = {24} 
            handleClick = { ()=> null }/>

            <View style = { styles.textContainer }>
              <Text style = { styles.textInfo } >calle 21 8b 36 Ed San carlos</Text>
              <Text style={styles.textInfoLast} >Barrio:Tenerife</Text>
            </View>
    
          </View>  



          <View style={styles.containerInfo}>
            <IconText 
              customStylesIcon={styles.iconInfo}
              color='#f98d2c' 
              icon='phone' 
              text='' 
              iconSize={24} 
              handleClick={() => null} />

            <View style={styles.textContainer}>
              <Text style={styles.textInfo} >311 455 6888 </Text>
              <Text style={styles.textInfoLast} >311 455 6888 </Text>
            </View>

          </View> 



          <View style={styles.containerInfo}>
            <IconText
              customStylesIcon={styles.iconInfo}
              color='#f98d2c' 
              icon='clock-o' 
              text='' 
              iconSize={24} 
              handleClick={() => null} />
            <View style={styles.textContainer}>
              <Text style={styles.textInfo} >8:00 AM - 12:00 PM </Text>
              <Text style={styles.textInfoLast} >2:00 AM - 6:00 PM </Text>
            </View>

          </View> 





          <View style={styles.containerInfo}>
            <IconText
              customStylesIcon={styles.iconInfo}
              color='#f98d2c' 
              icon='globe' 
              text='' 
              iconSize={24} 
              handleClick={() => null} />
            <View style={styles.textContainer}>
              <Text style={styles.textInfoLast} > www.google.com </Text>
              {
                //<Text style={styles.textInfoLast} > </Text>
              }
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
    fontFamily: 'Roboto-Medium',
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

