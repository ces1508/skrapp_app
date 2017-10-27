import React, { Component } from 'react'
import Card from '../card'
import PlaceCard from '../placeCard'
import geolib from 'geolib'

export default class Place extends Component {
  constructor(props) {
    super(props)
    this.calculeDistance = this.calculeDistance.bind(this)
    this.state = { distance: 0 }
  }

  calculeDistance () {
    if (this.props.position.hasOwnProperty('latitude')) {
      let { latitude, longitude } = this.props.data.location
      let positionPlace = {
        latitude,
        longitude
      }
      let distance =  geolib.getDistance(this.props.position, positionPlace)
      let distanceinKm = geolib.convertUnit('km', distance)
      this.setState({ distance: distanceinKm })
    } else {
      this.setState({ distance: '' })
    }
  }

  componentWillMount() {
    this.calculeDistance()
  }

  render() {
    let { data } = this.props
    return(
      <Card  data = { data}  handleClick = { this.props.handleClick }>
          <PlaceCard  address = {data.address} distance = { this.state.distance } unidad = 'km' ranking = {3} />
      </Card>
    )
  }
}