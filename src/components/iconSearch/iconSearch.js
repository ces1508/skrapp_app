import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
const IconSearch = (props) => {
  return(
      <TouchableOpacity onPress = {() => props.onRight() }> 
        <View style = { styles.iconContainer }>
          <Icon name= 'ios-search' size = {30} color = '#fff'/>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 25, 
    paddingRight: 20, 
    paddingVertical: 5,
    paddingTop: 10,
    // borderWidth: 1,
  }
}) 
export default IconSearch