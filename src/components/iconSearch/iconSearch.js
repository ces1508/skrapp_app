import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
const IconSearch = (props) => {
  return(
    <View style = { styles.iconContainer }>
      <TouchableOpacity onPress = {() => props.onRight() }> 
        <Icon name= 'ios-search' size = {30} color = '#fff'/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 0, 
    paddingRight: 20, 
    paddingVertical: 5,
    paddingTop: 10,
    // borderWidth: 1,
  }
}) 
export default IconSearch