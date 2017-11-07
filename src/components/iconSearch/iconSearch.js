import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  StyleSheet
} from 'react-native'
const IconSearch = (props) => {
  return(
    <View style = { styles.iconContainer }>
      <Icon name = 'search' size = {20} color = '#fff' onPress = {() => props.onRight() }/>
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