import React, { Component } from 'react'
import ListPlaces  from '../components/listPlaces'
import Api from '../api'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getCurrentPosition } from '../utils'
export default class DetailCategrory extends Component {
  constructor(props) {
    super(props)
    this.renderContent = this.renderContent.bind(this)
    this.state = ({
      data: [],
      loading: true,
    })
    this.getData = this.getData.bind(this)
  }


  async getData() {
    let { errorPosition, currentPosition } = this.state
    let data = await Api.getItemsByCategory(this.props.id, errorPosition? null : currentPosition )
    this.setState({ loading: false, data  })
  }

  componentWillMount() {
    getCurrentPosition()
    Actions.refresh({onRight: () => this.goToSearch() })
  }
  componentDidMount() {
    this.getData()
  }

  goToSearch() {
    Actions.search({ typeSearch: 'places' , categoryId: this.props.id})
  }

  renderContent() {
    let { loading } = this.state
    let currentPosition = {
      latitude: window.position.latitude || '',
      longitude: window.position.longitude || ''
    }
    if (loading ) {
      return(
        <View style = {{ flex:1, justifyContent: 'center' , alignItems: 'center',}}>
          <Text style = {{ fontSize: 25, }}> cargando los {this.props.title} ... </Text>
        </View>
      )
    } else {
      return (
        <View  >
          <ListPlaces  data={this.state.data} handleClick={this.nextPage} position = { currentPosition }  />
        </View>
      )
    }
  }

  render() {
    return this.renderContent()
  }
}


