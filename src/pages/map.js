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
  }

  async getPlaces() {
    let { initialRegion } = this.state
    let places = await Api.getPlacesByPosition(initialRegion)
    this.setState({ places })
  }

  componentDidMount() {
    this.getPlaces()
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
      // this.setState({ region })
    },
    (error) => {
      Alert.alert(
        'lo sentimos',
        'tenemos probelas para obtner tu poscion, por favor revisa tu confituracion del gps'
      )
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
              <View style = { styles.containerTooltip }>
                <View>
                    <Image source = {{ uri: place.imageThumb.url }}  style = {{ width: 50, height: 50, borderRadius: 25,  }}/>
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
            <View style = {{ flexDirection:'row', backgroundColor: 'red' }}>
              <View>
                  <Image source = {{ uri: place.imageThumb.url }}  style = {{ width: 50, height: 50 , borderWidth: 1, borderColor: '#4d4d4d'}}/>
              </View>
              <View >
                <Text style = { styles.titleMarker }> { place.title } </Text>
                <Text style={{ textAlign: 'auto' }}> { place.description } </Text>
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
      >
       { this.renderMarkers() }
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  containerTooltip: {
    flexDirection: 'row', 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    backgroundColor: '#fefefe', 
    borderRadius: 2, 
    flex: 1, 
    maxWidth: 320,
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'rgba(0,0,0,.1)',
    shadowOpacity: 1.0,
    overflow: 'hidden',

  },
  titleMarker: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    fontWeight: '400',
    marginBottom: 5,
  },

})