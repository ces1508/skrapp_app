import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class IconText extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let { handleClick } = this.props
    return(
      <View style = { styles.container } >
        <TouchableOpacity onPress = { () => this.props.click() }>
          <Icon name = { this.props.icon }
            size = { this.props.iconSize }
            color = { typeof(this.props.color) !== 'undefined'? this.props.color :  'white' }
            style={ this.props.customStylesIcon || styles.text  }
            />
          <Text style = { this.props.customStylesText || styles.text } > { this.props.text } </Text>
      </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#404250',
     marginLeft: 10
  },
  container: {
    flexDirection: 'row',
     paddingLeft: 20,
     marginTop: 12,
     zIndex: 100,
  },
  text: {
    marginLeft: 10,
    fontSize: 18
  }
})