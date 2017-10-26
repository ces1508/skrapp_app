import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PlaceBanner from '../placeBanner'
import PlacePicture from '../placePicture'
export default class PlaceHeader extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <View style = { styles.container } >
        <PlaceBanner banner = { this.props.banner } />
        <PlacePicture profileImage = { this.props.profileImage } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingBottom: 10,
   }
})
