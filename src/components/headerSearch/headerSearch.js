import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
export default HeaderSearch = (props) => {
  console.log(props)
  return(
    <View style = { styles.containerSearch }>
      <View style = { styles.containerinput}> 
        <Icons name='ios-search' size={18} style={styles.iconSearch} />      
        <TextInput 
          style = { styles.inputText }
          placeholder = 'Buscar categorias'
          value = { props.value }
          placeholderTextColor= '#a8a8a8'
          ref={input => { this.textInput = input }} 
          underlineColorAndroid = 'transparent'
          clearButtonMode = 'while-editing'
          onChangeText = {(text) => props.handleFilter(text)}
        />
      </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 10, 
    backgroundColor: 'rgba(0, 0 , 0 , .1)', 
    height: 50, 
    paddingVertical: 10
  },
  containerinput: {
    backgroundColor: '#fff', 
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText : {
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
    height: 32,
  },
  iconSearch: {
    paddingHorizontal: 7,
    color: '#a8a8a8',
    fontSize: 20,
    backgroundColor: 'transparent',
  }
})