import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions, Share, TouchableOpacity, Platform, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlaceHeeader from '../components/placeHeader'
import ActionsPlace from '../components/actionsPlace'
import PlaceInfo from '../components/placeInfo'
import PlaceBoxInfo from '../components/placeBoxInfo'
import PlaceBoxSocial from '../components/placeBoxSocial'
import Map from '../components/map'
let { width } = Dimensions.get('window')
import Api from '../api'
import { Actions } from 'react-native-router-flux'
import { ButtomIcon } from '../components/buttom'
import { LaunchMap, AlreadyUser } from '../utils'
export default class PlaceView extends Component {
  constructor(props) {
    super(props)
    this.state = { loading : true, favorited: false , userAlreadySigin: false, data: {}}
    this.toogleFavorite = this.toogleFavorite.bind(this)
    this.alreadyLiked = this.alreadyLiked.bind(this)
    this.onShare = this.onShare.bind(this)
    this.onReview = this.onReview.bind(this)
    this.userAlreadySigin = this.userAlreadySigin.bind(this)
    this.loadPlace = this.loadPlace.bind(this)
  }

  componentWillMount(){
    this.userAlreadySigin()
    this.loadPlace()
  }
  componentDidMount() {
    this.alreadyLiked()
  }

  async loadPlace() {
    let data = this.props.data
    if (this.props.placeId) {
      data = await Api.getPlace(this.props.placeId)
      console.log(data)
    } 
      
    this.setState({ data, loading: false })
  }
  
  async userAlreadySigin() {
    let userAlreadySigin = await AlreadyUser()
    this.setState({ userAlreadySigin })
  }
  showMap () {
    let { location } = this.props.data
    LaunchMap(location)
  }


  async toogleFavorite() {
    let { userAlreadySigin } = this.state
    if (!userAlreadySigin) {
      return Actions.login({ ensureLogin: true })
    }
    let like = await Api.likePlace(this.props.data)
    if (like.status === 'success') {
      like.data.action === 'like'?
        this.setState({ favorited: true })
      : this.setState({ favorited: false })
    } else {
      alert('estamos presentando problemas para manejar tu like')
    }
  }

  async alreadyLiked () {
    if (this.state.userAlreadySigin) {
      let liked = await Api.placeAlradyLiked(this.props.data)
      if (liked.status === 'success' && liked.liked === true) {
        this.setState({ favorited: true })
      }
    }
  }

  onShare() {
    let data = this.props.placeId ? this.props.data : this.state.data
    let { website, title, description } = data
    Share.share({
      message:`skrapp te recomienda ${title}\n
      ${description} \n 
      ${website}`,
      url: website,
      title: title,
      dialogTitle: 'compartir'
    })
  }
  
  async onReview() {
    let { userAlreadySigin } = this.state
    if (userAlreadySigin) {
      return Actions.review({ place: this.props.data })
    }
    Actions.login({ ensureLogin: true })
  }

  render() {
    let { data } = this.state
    if (!this.state.loading) {
      if (!data.error) {
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
                    onShare = { this.onShare }
                    onReview = { this.onReview }
                    favorited = { this.state.favorited } />
                </View>
                <View style = {{ marginTop: 20 }}>
                  <PlaceBoxInfo 
                    title = 'Más Información' 
                    location = {data.location } 
                    address = { data.address }  
                    website = { data.website }  
                    phone = { data.phone } />
                  {/* <PlaceBoxSocial title = 'Redes Sociales' /> */}
                </View>
                <View>
                  <Map title = { data.title } location = { data.location } description = { data.description } />
                  <View style = {{ position: 'absolute', right: 5, top: 10 }}>
                  <TouchableOpacity  onPress = { () => this.showMap() }>
                    <ButtomIcon iconSize = {20} text = 'Indicaciones' icon = 'location-arrow' colorIcon = 'white' styleBtn = { styles.styleBtn  }/>
                  </TouchableOpacity>
                  </View>
                </View>
            </View>
    
          </ScrollView>
        )
      } else {
        return(
          <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Text> {data.status === 404? 'No Hemos encontrado el lugar': 'Ups !, nuestros servidores estan al maximo, por favor intenta mas tarde'} </Text>
          </View>
        )
      }
      
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f4f4f4'
  },
  styleBtn: {
    justifyContent: 'center',
    width: 150, 
    height: 40,
    backgroundColor: '#4285f4',
    shadowColor: 'rgba(0,0,0,.15)',
    shadowOpacity: .9,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 3,
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
  }
})