import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default Item = (props) => {
  return (
    <View style={styles.containerInfo}>
      <Icon
      color = '#f98d2c'
      name = { props.icon }
      style = {{ paddingHorizontal: 10 }}
      size = {24} />
      <View style = { styles.textContainer }>
        {props.text1? <Text style = {[ styles.text ]} >{ props.text1 } </Text>: null }
        {props.text2? <Text style={[ styles.text, styles.textPadding ]} >{ props.text2} </Text> : null }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  textContainer: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    flex: 1

  },
  iconInfo: {
    color: '#f98d2c',
    height: 25,
    width: 25,
    textAlign: 'center',
  },
  text: {
    lineHeight: 30,
    fontSize: 18,
    color: '#454545',
    paddingBottom: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    paddingBottom: 5,
  },
  textPadding: {
    paddingBottom: 15,
  }
})
