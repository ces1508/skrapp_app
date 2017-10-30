import React, { Component } from 'react'
import {
  View,
  Dimensions,
  Geolocation,
  Alert,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import MapView from 'react-native-maps'
import Api from '../api'
const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.009
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initialRegion : {
        latitude: 2.9564872,
        longitude: -75.2887927,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      region: {},
      places: []
    }
    this.renderMarkers = this.renderMarkers.bind(this)
    this.getPlaces = this.getPlaces.bind(this)
  }

  async getPlaces() {
    let { region } = this.state
    let places = []
    if (region.latitude) {
      places = await Api.getPlacesByPosition(region)
    } else {
      places = await Api.getPlacesByPosition()
    }
    this.setState({ places })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords
      latitude = parseFloat(latitude)
      longitude = parseFloat(longitude)
      let region = {
        latitude,
        longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({ region })
      this.getPlaces()
    },
    (error) => {
      Alert.alert(
        'lo sentimos',
        `tenemos probelas para obtner tu poscion, por favor revisa tu configuracion gps \m
        tomaremos la ultima posicion registrada
        `
      )
      if (window.position.latitude) {
        this.setState({
          latitude: window.position.latitude,
          longitude: window.position.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        })
      }
      this.getPlaces()
    })
  }

  renderMarkers () {
    let { places } = this.state
    console.log(places.length)
    if (places.length > 0) {

      return places.map((place, index) => {
        if (place.category && place.category.icon) {
          return (
            <MapView.Marker key = { place.objectId }
              coordinate = { place.location }
              title = { place.title }
              description = { place.description }
              identifier = { place.objectId }
              image = { place.category.icon.url }
            >
              <MapView.Callout tooltip >
                <View style = {{ flexDirection:'row', backgroundColor: '#fff' }}>
                  <View>
                      <Image source = {{ uri: place.imageThumb.url }}  style = {{ width: 50, height: 50 }}/>
                  </View>
                  <View>
                    <Text style = { styles.titleMarker }> {place.title} </Text>
                    <Text> { place.description } </Text>
                  </View>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          )
        }
        return (
          <MapView.Marker key = { place.objectId }
            coordinate = { place.location }
            title = { place.title }
            description = { place.description }
            identifier = { place.objectId }
          >
            <MapView.Callout tooltip >
              <View style = {{ flexDirection:'row', backgroundColor: '#fff' }}>
                <View>
                    <Image source = {{ uri: place.imageThumb.url }}  style = {{ width: 50, height: 50 }}/>
                </View>
                <View>
                  <Text style = { styles.titleMarker }> {place.title} </Text>
                  <Text> { place.description } </Text>
                </View>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        )
      })
    }
  }
  render() {

    return(
      <MapView
        style = {{ height, width }}
        initialRegion = { this.state.initialRegion }
        region = { this.state.region.latitude? this.state.region : this.state.initialRegion}
      >
       { this.renderMarkers() }
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  titleMarker: {
    fontSize: 16
  }
})