import React, { Component } from 'react'
import {
  View,
  Dimensions,
  Geolocation,
  Alert,
  Text,
  Image,
  StyleSheet,
 TouchableOpacity,
 AsyncStorage
} from 'react-native'
import MapView from 'react-native-maps'
import Api from '../api'
import geolib from 'geolib'
import { getMapStyle } from '../utils'
import { Actions } from 'react-native-router-flux'
import Marker from '../components/marker'
import { getCurrentPosition, getLastPosition } from '../utils'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.009
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const initialRegion = {
  latitude: 2.9564872,
  longitude: -75.2887927,
  latitudeDelta:LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      style: 'standard',
      loading: true,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      places: [],
      ready: false,
      calcule: initialRegion
    }
    this.renderMarkers = this.renderMarkers.bind(this)
    this.getPlaces = this.getPlaces.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
    this.getStylesMap = this.getStylesMap.bind(this)
    this.goPlace = this.goPlace.bind(this)
    this._onMapReady = this._onMapReady.bind(this)
    this.getPosition = this.getPosition.bind(this)
  }

  async getPlaces() {
    let { region } = this.state
    let places = await Api.getPlacesByPosition(region.latitude !== 0? region : initialRegion)
    this.setState({ places: [...this.state.places, ...places], loading: false })
  }

  async getStylesMap () {
    let style = await getMapStyle()
    this.setState({ style })
  }

  async getPosition() {
    let currentPosition = await getCurrentPosition()
    let lastPosition = await getLastPosition()
    let region = initialRegion
    if (!currentPosition.error) {
      region = currentPosition
    } else if (!lastPosition.error) {
      region = lastPosition
    }
    region.longitudeDelta = LONGITUDE_DELTA
    region.latitudeDelta = LATITUDE_DELTA
    this.setState({ region })
    this.getPlaces()
  }

  componentWillMount () {
    this.getStylesMap()
    this.getPosition()
  }

  goPlace(place) {
    Actions.place({ data: place, title: place.title })
  }

  _onMapReady() {
    this.setState({ regionSet: true  })
  }

  onRegionChange (region) {
    if (!this.state.regionSet) return;
    this.setState({
      region
    });
    let { calcule } = this.state
    let distance = geolib.getDistance(calcule, region)
    let km = geolib.convertUnit('km', distance)
    if (km > 100) {
      this.setState({ calcule: region })
      this.getPlaces()
    }
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
            <MapView.Callout tooltip  onPress = { () =>this.goPlace(place)}>
             <Marker place = { place } />
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
          <MapView.Callout tooltip onPress = { () =>this.goPlace(place)} >
          <Marker place = { place } />
          </MapView.Callout>
        </MapView.Marker>
      )
    })
  }
  render() {
    return(
      <View>
        <MapView
          style = {{ height, width }}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
          initialRegion = { initialRegion }
          onMapReady = { this._onMapReady }
          showsUserLocation = {true}
          showsScale = { true }
          region = { this.state.region}
          onRegionChange = { this.onRegionChange }
          mapType = { this.state.style }
          cacheEnabled = { true }
        >
        { this.renderMarkers() }
        </MapView>
      </View>
    )
  }
}
