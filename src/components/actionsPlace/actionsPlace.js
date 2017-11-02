import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Action from './action'
export default class ActionsPlace extends Component {
  constructor(props) {
    super(props)
    this.favorite = this.favorite.bind(this)
  }

  favorite() {
    let { favorited } = this.props
    if (favorited) {
      return '#ca202a'
    }
    return '#4A4A4A'
  }
  render() {
    return(
      <View style = { styles.container } >
        <Action 
          icon = 'heart' 
          colorIcon = {this.favorite()} 
          text = 'FAVORITOS' 
          handleClick = {this.props.handleFavorite}
        />
        <Action 
          icon = 'star' 
          colorIcon = '#4A4A4A' 
          text = 'RESEÑAR'
          handleClick = {this.props.onReview}
        />
        <Action 
          icon='share' 
          colorIcon= '#272d54' 
          text = 'COMPARTIR' 
          handleClick = {this.props.onShare}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fefefe',
    elevation: 3,
    height: 80,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: .9,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  }
})