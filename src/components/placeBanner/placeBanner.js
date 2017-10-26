import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')


export default class PlaceBanner extends Component {
  constructor(props)  {
    super(props)
    this.state = { width: width }
    this.handleChangeDimensions = this.handleChangeDimensions.bind(this)
  }

  handleChangeDimensions(dis) {
    this.setState({
      width: dis.window.width
    })
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleChangeDimensions)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handleChangeDimensions)
  }

  render() {
    return(
      <View style = { styles.container }>
        <Image
          source = {{ uri: this.props.banner }}
          resizeMode = 'cover'
          style = {[ styles.image, { width: this.state.width } ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
    backgroundColor: '#F8F8F6',
    
  }
})