import React from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
export default HeaderSearch = (props) => {
  console.log(props)
  return(
    <View style = {{ flexDirection: 'row', paddingHorizontal: 10, backgroundColor:'#5D6D7E', height: 50, paddingVertical: 10 }}>
      <TextInput 
        style = {{ flex: 1, paddingHorizontal: 30, backgroundColor: '#AEB6BF', borderRadius: 15, height: 30 }}
        placeholder = 'Buscar Categorias'
        value = { props.value }
        placeholderTextColor = '#fff'
        ref={input => { this.textInput = input }} 
        underlineColorAndroid = 'transparent'
        clearButtonMode = 'while-editing'
        onChangeText = {(text) => props.handleFilter(text)}
      />
      <Icons name = 'search' size = {20}  style = {{ position: 'absolute', top: 15, left: 18, backgroundColor: 'transparent' }}/>
     
    </View>
  )
}
const styles = StyleSheet.create({
})