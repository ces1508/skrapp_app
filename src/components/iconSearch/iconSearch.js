import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View
} from 'react-native'
const IconSearch = (props) => {
  return(
    <View style = {{ paddingHorizontal: 35, paddingVertical: 10,}}>
      <Icon name = 'search' size = {20} color = '#fff' onPress = {() => props.onRight() }/>
    </View>
  )
}

export default IconSearch