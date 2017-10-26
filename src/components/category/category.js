import React, { Component  } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import Card from '../card'
export default class Category extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    let { order } = this.props.data
    return(
      <Card data = {this.props.data} handleClick = {this.props.handleClick} >
        <View style = { styles.category }>

          <View style = { styles.content }>
            <Icons style = {styles.iconmaps} name='map-marker' size={20} /> 
            <Text style={styles.text}> Disponibles {order}</Text> 
          </View>

          <View style = { styles.arrowRight }>
            <Icons 
              name='angle-right' 
              size={40} 
              color= '#454545' />
          </View>

          
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  content: {
    flexDirection: 'row',
    flex: 1,
    //borderWidth: 1,
    //borderColor: 'green',
    //paddingTop: 5
    
  },
  arrowRight: {
    marginTop: -20
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 5,
    color: '#7d7d7d',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400'

    
    
  },
  iconmaps:{
    color:'#7d7d7d',
    //paddingLeft: 6,


  }

})