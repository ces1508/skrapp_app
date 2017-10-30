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
              <View style={styles.containerTooltip}>
              <View style={styles.containerImage}>
                <Image source={{ uri: place.imageThumb.url }}
                  style={styles.image} />
              </View>
              <View >
                <Text style={styles.titleMarker}> {place.title} </Text>
                <Text style={styles.descriptionMarker}> {place.description} </Text>
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
            <View style={styles.containerTooltip}>
              <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: place.imageThumb.url }} />
              </View>
              <View >
                <Text style={styles.titleMarker}> {place.title} </Text>
                <Text style={styles.descriptionMarker}> {place.description} </Text>
              </View>
            </View>
          </MapView.Callout>
        </MapView.Marker>
      )
    })
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
  containerTooltip: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 10, 
    paddingHorizontal: 10, 
    backgroundColor: '#fefefe', 
    borderRadius: 2, 
    flex: 1, 
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'rgba(0,0,0,.1)',
    shadowOpacity: 1.0,
    overflow: 'hidden',

  },
  containerImage: {
    marginRight: 5
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    borderWidth: 1, 
    borderColor: 'rgba(0,0,0,.25)',
    backgroundColor: '#f4f4f4'
  },
  titleMarker: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    marginBottom: 5,
    color: '#454545',
    maxWidth: 280,
  },
  descriptionMarker: {
    fontSize: 14, 
    flexWrap: 'wrap', 
    maxWidth: 250, 
    lineHeight: 18
  }

})