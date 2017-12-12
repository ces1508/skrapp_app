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
    this.onFilter = this.onFilter.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.state = { data: [], loading: true, filter: null, filtering: false, refreshing: false }
  }

  async getData() {
    let data = await Api.getCategories()
    this.setState({ data  ,loading: false, refreshing: false })
  }
  componentDidMount() {
    this.getData()
  }

  onRefresh () {
    this.setState({ refreshing: true },() => this.getData())
  }

  goToSearch() {
    let { data }  = this.state
    Actions.search({ typeSearch: 'place' })
  }

  onFilter (text) {
    let { data } = this.state
    let rgx =  new RegExp(text, 'gi')
    let filter= data.filter((row) => {
      if (row.title.match(rgx) !== null) {
        return row
      }
    })
    this.setState({ filter, filtering: text.length > 0? true: false})
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
          <Categories
          refreshing = { this.state.refreshing }
          onRefresh = {this.onRefresh} 
          data = { this.state.filtering ? this.state.filter: this.state.data } 
          onFilter = {this.onFilter}/>
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