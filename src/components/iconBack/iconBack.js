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
    <View style = { styles.iconContainer }>
      <TouchableOpacity onPress = { () => Actions.pop() }> 
        <Icon name= 'ios-arrow-back-outline' size = {35} color = '#fff'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 18, 
    paddingRight: 25, 
    // paddingVertical: 10,
    // borderWidth: 1,
    paddingTop: 5,
  }
}) 
export default IconBack