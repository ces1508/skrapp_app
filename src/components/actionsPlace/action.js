import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Action = (props) => {
  return(
    <TouchableOpacity onPress = {() => props.handleClick()}>
      <View style = { styles.container } >
        <Icon name = {props.icon} color = { props.colorIcon } size = {25}/>
        <Text style = { styles.text }> {props.text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }, 
  text: {
    color: '#5A5A5A',
    //fontWeight: 'medium',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
  }
})

export default Action