import React, { Component } from 'react'
import {
  View,
  WebView,
  ActivityIndicator,
  Text
} from 'react-native'

export default class WebSite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  loadEnd () {
    console.log('load')
    this.setState({ loading: false })
  }

  renderLoading () {
    let { loading } = this.state
    if (loading) {
      return(
        <View style = {{flexDirection: 'column', flex: 1 }} >
          <ActivityIndicator size = {1} color = 'orange'/>
          <Text> Cargando sitio web </Text>
      </View>
      )
    }
  }
  render(){
    let { loading } = this.state
    let { websiteUri } = this.props

    if (websiteUri === 'http://' || websiteUri === '') {
      websiteUri = 'https://www.google.com.co'
    }
    return(
      <View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <WebView
            style = {{ flex: 1 }}
            startInLoadingState = { true }
            source = {{ uri: websiteUri }}
            onLoadEnd = {() =>  this.loadEnd() }
            onError = { (error)=> { console.log('error ', error) } }
            onLoadStart = { () => console.log('inicio la carga') }
          />
          {// this.renderLoading()
          }
      </View>
    )
  } 
}