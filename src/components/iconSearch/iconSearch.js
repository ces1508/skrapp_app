import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
const IconSearch = (props) => {
  return(
    <View style = { styles.iconContainer }>
      <TouchableOpacity onPress = {() => props.onRight() }> 
        <Icon name = 'search' size = {20} color = '#fff'/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 25, 
    paddingRight: 15, 
    paddingVertical: 10,
  }
}) 
export default IconSearch