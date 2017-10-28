import React, { Component } from  'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StyleSheet } from 'react-native'
export default class Star extends Component {
  constructor() {
    super()
  }

  renderStart() {
    let { type } = this.props
    let size = 15
    switch (type) {
      case 'full': 
        return <Icon 
                  style = {styles.starsteel} 
                  name='star'
                  color='yellow'
                  size={size} />
        break;
      case 'half': 
        return <Icon 
                  style = {styles.starsteel} 
                  name='star-half-o' 
                  color='yellow' 
                  size={size} 
                  />
        break;
      case 'empty': 
        return <Icon 
                  style = {styles.starsteel} 
                  name='star' 
                  color='#6f6f6f' 
                  size={size} 
                  //style={{ marginLeft: 4 }} 
                  />
        break;
      default:
        return <Icon 
                  style = {styles.starsteel} 
                  name='star' 
                  color='#6f6f6f' 
                  size={size} 
                  /> 
    }
  }
  render() {
    return(
      <View>
        { this.renderStart() }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  starsteel:{
    marginRight: 4,
    marginTop: 4,
    //borderWidth: 1, 
    textAlign: 'center',
    
  }
})
