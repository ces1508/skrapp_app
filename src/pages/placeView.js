import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlaceHeeader from '../components/placeHeader'
import ActionsPlace from '../components/actionsPlace'
import PlaceInfo from '../components/placeInfo'
import PlaceBoxInfo from '../components/placeBoxInfo'
import PlaceBoxSocial from '../components/placeBoxSocial'
import Map from '../components/map'
let { width } = Dimensions.get('window')

export default class PlaceView extends Component {
  constructor(props) {
    super(props)
    this.state = { favorited: false }
    this.toogleFavorite = this.toogleFavorite.bind(this)
  }

  toogleFavorite() {
    this.setState({ favorited: !this.state.favorited })
  }

  render() {
    let { data } = this.props
    let imageBanner = data.imageTwo? data.imageTwo.url: data.image.url
    return(
      <ScrollView>
        <PlaceHeeader
          banner = { imageBanner }
          profileImage =  { data.imageThumb.url }
         />
         <View style = { styles.main }>
            <PlaceInfo
              title = { data.title }
              description = { data.description }
              address = { data.address } />
            <View style = {{flex: 1, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
              <ActionsPlace
                handleFavorite = {this.toogleFavorite}
                favorited = { this.state.favorited } />
            </View>
            <View style = {{ marginTop: 20 }}>
              <PlaceBoxInfo title = 'Mas Información' address = { data.address }  website = { data.website }  phone = { data.phone } />
              <PlaceBoxSocial title = 'Redes Sociales' />
            </View>
            <Map title = { data.title } location = { data.location } description = { data.description } />
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f4f4f4'
  }
})