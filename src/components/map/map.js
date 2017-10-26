import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { Dimensions , View, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.009;

const ASPECT_RATIO = width / 300

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.onRegionChange = this.onRegionChange.bind(this)
    this.state ={
      region: {
        latitude: this.props.location.latitude ||  LATITUDE,
        longitude: this.props.location.longitude || LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
      }
     }
   }


  onRegionChange(region) {
    this.setState({ region });
  }


  render() {
    return(
      <View style ={ styles.contentMaps}>
        <MapView
          style={{
            height: 300,
            //borderColor: 'rgba(0, 0, 0, 0.07)',
            //borderWidth: 2,
          }}
          region={this.state.region}
          scrollEnabled = { false }
        >
          <MapView.Marker 
            title = { this.props.title } 
            description = { this.props.description } 
            coordinate = { this.state.region } />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentMaps: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,.15)',
    shadowOpacity: .9,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  }

})