import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'

const Line = (props) => {
  return(
    <View style = { styles.container }>
      <View style = { styles.line } ></View>
      <Text style = {[ styles.text, { flex: 1 , marginTop: -10} ]} >  {props.text} </Text>
      <View style = { styles.line } ></View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   height: 10, 
   flexDirection: 'row', 
   paddingHorizontal: 20, 
   //borderWidth: 1,
   marginBottom: Platform.OS === 'android' ? 5 : 0,
   marginTop: Platform.OS === 'android' ? 20 : 15,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
  },
  line: {
    height: 1 ,
    backgroundColor: '#fff',
    flex: 1,
    opacity: .4,
  }
})
export default Line