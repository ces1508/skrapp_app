import React, { Component } from 'react'
import ListPlaces  from '../components/listPlaces'
import Api from '../api'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getCurrentPosition, getLastPosition } from '../utils'
import Load from '../components/load'
import NotFound from '../components/searchnotfound'
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
    let currentPosition = await getCurrentPosition()
    let lastPosition = await getLastPosition()
    let data = []
    if (!currentPosition.error) {
      data = await Api.getItemsByCategory(this.props.id, currentPosition )
    } else if (!lastPosition.error) {
      currentPosition = lastPosition
      data = await Api.getItemsByCategory(this.props.id, lastPosition)
    } else {
      data = await Api.getItemsByCategory(this.props.id, )
    }
    this.setState({ loading: false, data, currentPosition: currentPosition  })
  }

  componentWillMount() {
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
    if (loading ) {
      return(
        <View>
          <Load />
          <Load />
        </View>
      )
    } else if(this.state.data.length > 0) {
      return (
        <View  >
          <ListPlaces  data={this.state.data} handleClick={this.nextPage}  currentPosition = { this.state.currentPosition }  />
        </View>
      )
    } else {
      return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <NotFound  text = 'No hemos  encontrado ningún resultado. se el primero en estar aquí.' />
        </View>
      )
    }
  }

  render() {
    return this.renderContent()
  }
}


