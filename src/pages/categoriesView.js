import React, { Component } from 'react'
import Api from '../api'
import Categories from '../components/categories'
import { Actions } from 'react-native-router-flux'
import { View, Text } from 'react-native'

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
        <View style = {{ flex:1, justifyContent: 'center' , alignItems: 'center'}}>
          <Text style = {{ fontSize: 25, }}> cargando categories ... </Text>
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
    return this.renderContent()
  }
}