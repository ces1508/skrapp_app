import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform

} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
import Api from '../api'

import Categories from '../components/categories'
import ListPlaces from '../components/listPlaces'
import {getCurrentPosition, getLastPosition } from '../utils'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      typeSearch: this.props.typeSearch,
      filterData: [],
      q: '',
      loading: false,
      filter: false,
      position: {}
    }
    this.renderRows = this.renderRows.bind(this)
    this.filterCategories = this.filterCategories.bind(this)
    this.filterData = this.filterData.bind(this)
    this.filterPlaces = this.filterPlaces.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  filterCategories (xt) {
    let { data, q } = this.state
    let rgx =  new RegExp(q, 'gi')
    let filterData = data.filter((row) => {
      if (row.title.match(rgx) !== null) {
        return row
      }
    })
    this.setState({ filterData, filter: true })
  }

  async filterPlaces() {
    let currentPosition = await getCurrentPosition()
    let lastPosition = await getLastPosition()
    let position = {}
    let data = []
    if (!currentPosition.error) {
      position = currentPosition
    }
    if (!lastPosition.error) {
      position = lastPosition
    }
    let filter = await Api.filterPlaceByName(this.state.q, this.props.categoryId)
    this.setState({ filterData: filter, position })
  }

  handleInput (value) {
    let filter = false
    if (value.trim().length > 0) {
      filter = true
    }
    this.setState({ q: value, filter })
    this.filterData()
  }

  clearInput() {
    this.setState({ q: '', filterData: [] })
  }

  handleBack () {
    Actions.pop()
  }
  filterData () {
    let { typeSearch } = this.state
    if (typeSearch === 'categories') {
      this.filterCategories()
    } else {
      this.filterPlaces()
    }
  }

  renderRows () {
    let { filter, data, filterData, typeSearch } = this.state
    if (typeSearch === 'categories') {
      return <Categories  data = { filter? filterData : data } />
    }
    return <ListPlaces data = { filter? filterData : data } currentPosition = {this.state.position }/>
  }
  render() {
    return(
      <View style = {{ backgroundColor: '#f4f4f4',  paddingBottom: 10}}>
        <View style={styles.searchContainer} >
          <View style={styles.containerInput} >
            <TouchableOpacity onPress = { () => this.handleBack() } >
              <View  style = {{ paddingHorizontal: 8 }}>
                <Icons
                  style={ styles.inputIconsBack }
                  name = 'arrow-left'
                  size = { 18 }
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
              name = { 'times' }
              size = {20}
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
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7'
  },
  containerInput:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputIconsBack:{
    marginLeft: 8,
    color: "#4a4a4a",
    // borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  input:{
    flex: 1,
    paddingLeft: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    height: 50,
    fontStyle: 'italic',
  },
  inputIconClear: {

    color: '#4a4a4a',
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15
  }

})