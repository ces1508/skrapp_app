import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator

} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'
import Api from '../api'

import Categories from '../components/categories'
import ListPlaces from '../components/listPlaces'
import {getCurrentPosition, getLastPosition } from '../utils'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      typeSearch: this.props.typeSearch,
      q: '',
      refreshing: false, 
      skip: 1,
      loading: false,
      position: {error: true}
    }
    this.renderRows = this.renderRows.bind(this)
    this.filter = this.filter.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }


  async filter() {
    let { skip } = this.state
    let position = await getCurrentPosition()
    if (this.state.q.length >=2 ) {
      this.setState({ loading: true })
      let data = await Api.filterPlaceByName(this.state.q, null, skip, 50)
      this.setState({ data, position, loading: false })
    }
  }

  loadMore () {
   return null
    this.setState({ 
      skip: this.state.skip  + this.state.limit,
      loading: false,
      refreshing: false,
      position: this.state.currentPosition
    }, () => { this.filter() })
  }

  onRefresh () {
    this.setState({
      position: this.state.position,

    })
  }

  handleInput (value) {
    this.setState({ q: value })
    this.filter()
  }

  clearInput() {
    this.setState({ q: '', data: [] })
  }

  handleBack () {
    Actions.pop()
  }

  renderRows () {
    let { loading,  data } = this.state
    if (loading) {
      return <ActivityIndicator animating size="large" />
    }
    if(!loading  &&  data.length > 0) {
      return <ListPlaces 
        data = { data }
        loadMore = { this.loadMore } 
        currentPosition = {this.state.position }
      />
    }
    return null
  }
  render() {
    return(
      <View style={{ backgroundColor: '#e9e9ef',  paddingBottom: 10}}>
        <View style={styles.searchContainer} >
          <View style={styles.containerInput} >
            <TouchableOpacity onPress = { () => this.handleBack() } >
              <View  style = {{ paddingHorizontal: 8 }}>
                <Icons
                  style={ styles.inputIconsBack }
                  name='ios-arrow-round-back-outline'
                  size = { 40 }
                />
              </View>
            </TouchableOpacity>

            <TextInput
              style = { styles.input }
              placeholder = 'Lo que Necesitas'
              placeholderTextColor = "#d2d5d9"
              autoFocus = { true }
              maxLength = { 50 }
              value = { this.state.q }
              onChangeText = { (text) => this.handleInput(text)}
            />

            <Icons
              style = { styles.inputIconClear }
              name={ 'ios-close-outline' }
              size = {40}
              onPress = { this.clearInput }
            />
          </View>
        </View>
        { this.renderRows()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer:{
    backgroundColor: '#e79d39',
    paddingTop: Platform.OS === 'android' ? 0 : 20,
  },
  containerInput:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  inputIconsBack:{
    marginLeft: 8,
    color: "#4a4a4a",
    paddingTop: 5,
    paddingHorizontal: 10,  
  },
  input:{
    flex: 1,
    paddingLeft: 5,
    backgroundColor: 'white',
    height: 50,
    fontStyle: 'italic',
  },
  inputIconClear: {

    color: '#4a4a4a',
    marginRight: 10,
    paddingHorizontal: 13,
    paddingTop: 5,
  }
})