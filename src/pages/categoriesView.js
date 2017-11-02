import React, { Component } from 'react'
import Api from '../api'
import Categories from '../components/categories'
import { Actions } from 'react-native-router-flux'
import { View, Text, StatusBar, Platform } from 'react-native'
import Load from '../components/load'

export default class CategoriesView extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.state = { data: [], loading: true }
  }

  async getData() {
    let data = await Api.getCategories()
    this.setState({ data  ,loading: false })
  }
  componentWillMount() {
    Actions.refresh({onRight: () => this.goToSearch() })
  }

  componentDidMount() {
    this.getData()
  }

  goToSearch() {
    let { data }  = this.state
    Actions.search({ typeSearch: 'categories', data })
  }

  renderContent() {
    let { loading, data } = this.state
    if (loading) {
      return(
        <View>
          <Load />
          <Load />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Categories data = { this.state.data }/>
        </View>
      )

    }
  }
  render() {
    return (
      <View style = {{ flex: 1 }} >
      {
        Platform.OS === 'android'?
         <StatusBar
          backgroundColor = 'orange'
          translucent={false}
          />
        : null
      }
        { this.renderContent() }
      </View>
    )
  }
}