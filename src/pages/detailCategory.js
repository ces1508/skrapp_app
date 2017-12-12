import React, { Component } from 'react'
import ListPlaces  from '../components/listPlaces'
import Api from '../api'
import { View, Text, ActivityIndicator } from 'react-native'
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
      limit: 10,
      skip: 1,
      currentPosition: null,
      refreshing: false
    })
    this.getData = this.getData.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }


  async getData() {
    let { limit, skip, currentPosition} = this.state
    if (currentPosition === null) {
      currentPosition = await getCurrentPosition()
    }
    let data = []
    if (!currentPosition.error) {
      data = await Api.getItemsByCategory(this.props.id, currentPosition, skip, limit)
    } else {
      data = await Api.getItemsByCategory(this.props.id, null, skip, limit)
    }
    this.setState({ 
      loading: false,
      refreshing: false, 
      data: skip === 1? data : [...this.state.data, ...data], 
      currentPosition: currentPosition  
    })
  }

  componentDidMount() {
    this.getData()
  }

  goToSearch() {
    Actions.search({ typeSearch: 'places' , categoryId: this.props.id})
  }


  loadMore () {
    this.setState({ 
      skip: this.state.skip  + this.state.limit,
      loading: true,
      refreshing: false,
      currentPosition: this.state.currentPosition
    }, () => { this.getData() })
  }
   onRefresh () {
    this.setState({ 
      limit: 10,
      refreshing: true, 
      skip: 1 , 
    },
      () => { this.getData() }
    )
  }

  renderContent() {
    let { loading, skip } = this.state
    if (loading && skip === 1) {
      return(
        <View>
          <Load />
          <Load />
        </View>
      )
    } else if(this.state.data.length > 0) {
      return (
        <View  >
          <ListPlaces 
            loading = { this.state.loading }
            data={this.state.data} 
            handleClick={this.nextPage}  
            loadMore = {() => this.loadMore}
            currentPosition = { this.state.currentPosition }
            onRefresh = { this.onRefresh }
            refreshing = { this.state.refreshing }  
          />
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


