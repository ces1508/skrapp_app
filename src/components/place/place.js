import React, { Component } from 'react'
import Card from '../card'
import PlaceCard from '../placeCard'
import geolib from 'geolib'
import { getUnidad } from '../../utils'

export default class Place extends Component {
  constructor(props) {
    super(props)
    this.calculeDistance = this.calculeDistance.bind(this)
    this.Unidad = this.Unidad.bind(this)
    this.state = { distance: 0, showDistance: false, unidad: 'km' }
  }

  calculeDistance () {
    if (this.props.currentPosition) {
      let { latitude, longitude } = this.props.data.location
      let positionPlace = {
        latitude,
        longitude
      }
      let currentPosition = {
        latitude: this.props.currentPosition.latitude,
        longitude: this.props.currentPosition.longitude
      }
       let distance =  geolib.getDistance(currentPosition, positionPlace)
      let distanceinKm = geolib.convertUnit(this.state.unidad, distance)
      this.setState({ distance: distanceinKm, showDistance: true })
    }
  }

  async Unidad() {
    let unidad = await getUnidad()
    this.setState({ unidad })
  }

  componentDidMount() {
    this.Unidad()
    if (this.props.currentPosition.hasOwnProperty('error') === false) {
      this.calculeDistance()
    }
  }


  render() {
    let { data } = this.props
    let ranking = 0
    if (data.ratingCount &&  data.ratingTotal) {
     ranking =  Math.round(data.ratingTotal / data.ratingCount)
    }
    return(
      <Card  data = { data}  handleClick = { this.props.handleClick }>
          <PlaceCard
            address = {data.address}
            showDistance = {this.state.showDistance}
            distance = { this.state.distance }
            unidad = { this.state.unidad } ranking = {ranking} />
      </Card>
    )
  }
}