import React, { Component } from 'react'
import ListPlaces  from '../components/listPlaces'
import Api from '../api'
import { View, Text } from 'react-native'
import { Actions } from "react-native-router-flux";
export default class DetailCategrory extends Component {
  constructor(props) {
    super(props)
    this.renderContent = this.renderContent.bind(this)
    this.state = ({ 
      data: [], 
      loading: true, 
      currentPosition: {},
      errorPosition: true
    })
    this.getData = this.getData.bind(this)
    this.getCurrentPosition = this.getCurrentPosition.bind(this)
  }


  getCurrentPosition () {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      this.setState({  
        currentPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    }, (error => {
      this.setState({ errorPosition: true })
    }), { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000  })
  }

  async getData() {
    let { errorPosition, currentPosition } = this.state
    let data = await Api.getItemsByCategory(this.props.id, errorPosition? null : currentPosition )
    this.setState({ loading: false, data  })
  }

  componentWillMount() {
    Actions.refresh({onRight: () => this.goToSearch() })
    this.getCurrentPosition()
  }
  componentDidMount() {
    this.getData()
  }
  
  goToSearch() {
    Actions.search({ typeSearch: 'places' , categoryId: this.props.id})
  }
  
  renderContent() {
    let { loading } = this.state
    if (loading ) {
      return(
        <View style = {{ flex:1, justifyContent: 'center' , alignItems: 'center',}}>
          <Text style = {{ fontSize: 25, }}> cargando los {this.props.title} ... </Text>
        </View>
      )
    } else {
      return (
        <View  > 
          <ListPlaces  data={this.state.data} handleClick={this.nextPage} position = {this.state.currentPosition }  />
        </View>
      )
    }
  }
  
  render() {
    return this.renderContent()
  }
}


