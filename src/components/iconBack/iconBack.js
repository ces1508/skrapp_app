import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const IconBack = (props) => {
  return(
    <TouchableOpacity onPress = { () => Actions.pop() }> 
      < View style = { styles.iconContainer }>
        <Icon name= 'ios-arrow-back-outline' size = {35} color = '#fff'/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 18, 
    paddingRight: 25, 
    paddingTop: 5,
  }
}) 
export default IconBack