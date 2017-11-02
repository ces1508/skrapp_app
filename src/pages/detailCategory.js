import React, { Component } from 'react'
import ListPlaces  from '../components/listPlaces'
import Api from '../api'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getCurrentPosition } from '../utils'
import Load from '../components/load'
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
    let currentPosition = window.position
    if (currentPosition.error) {
      let data = await Api.getItemsByCategory(this.props.id)
      console.log(data)
      this.setState({ loading: false, data  })
    } else {
      let data = await Api.getItemsByCategory(this.props.id, currentPosition )
      console.log(data)
      this.setState({ loading: false, data  })
    }
  }

  componentWillMount() {
    console.log('montando el componente')
    Actions.refresh({onRight: () => this.goToSearch() })
  }
  componentDidMount() {
    getCurrentPosition()
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
    } else {
      return (
        <View  >
          <ListPlaces  data={this.state.data} handleClick={this.nextPage}  currentPosition = { window.position }  />
        </View>
      )
    }
  }

  render() {
    return this.renderContent()
  }
}


