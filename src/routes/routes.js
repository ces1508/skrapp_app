import React, { Component } from 'react'
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux'
import CategoriesView from '../pages/categoriesView'
import DetailCategory from '../pages/detailCategory'
import PlaceView from '../pages/placeView'
import LoginView from '../pages/login'
import RegistryView from '../pages/registry'
import MyFavoriteView from '../pages/myfavorites'
import Menu from '../components/menu'
import IconSearch from '../components/iconSearch'
import IconBack from '../components/iconBack'
import About from '../pages/about'
import Search from '../pages/search'
import Settings from '../pages/settings'
import MapView from '../pages/map'
import WebSite from '../pages/website'
import { AlreadyUser, setMapStyle, setUnidad } from '../utils'
import Review from '../pages/review'
import {
  ActivityIndicator
} from 'react-native'
import BackButtom from '../../assets/images/back.png'
import MenuIcon from '../../assets/images/menu.png'

export default class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      loading: true
     }
  }

  goToSearch() {
    let { data }  = this.state
    Actions.search({ typeSearch: 'place' })
  }


  async setValues() {
    await Promise.all([setMapStyle(), setUnidad()])
  }

  onBackPress = (e) => {
    if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true
}
  componentWillMount() {
    this.setValues()
    this.requireLogin()
  }
  async requireLogin () {
    let requireLogin = await AlreadyUser()
    this.setState({ login: requireLogin, loading: false })
  }

  render() {
    let { loading, login } = this.state
    if (loading) {
      return <ActivityIndicator animating = { true } color = 'orange' />
    }
    return(
      <Router  backAndroidHandler = {this.onBackPress}>
      <Scene key='root' navigationBarStyle={{ backgroundColor: '#f99800' }} titleStyle = {{ color: '#fff' }} statusBarStyle = 'red' >
            <Scene
              key = 'login'
              component = { LoginView }
              hideNavBar
              initial = { !login } />
              <Scene
                key = 'register'
                component={RegistryView }
                hideNavBar />
            <Scene
              key = "drawer"
              drawer
              contentComponent = { Menu }
              hideNavBar
              drawerImage = { MenuIcon }
              initial = { login }
              drawerWidth = {250}>
              <Scene
                key = 'categories'
                component = { CategoriesView }
                title = 'Categorias'
                hideBackImage = { true }
                titleStyle={{alignSelf: 'center' , color: '#fff'}}
                // renderRightButton = {IconSearch}
                // onRight = { () => this.goToSearch() }
              />
            </Scene>
            <Scene
              key = 'detailCategory'
              component = { DetailCategory }
              leftTitle = ""
               titleStyle = {{ color: '#fff' }}
               onRight = {() => null}
               backButtonImage = { BackButtom } 
               renderBackButton={IconBack}
               onRight = { () => this.goToSearch() }                
               renderRightButton = {IconSearch}/>
            <Scene
              key = 'place'
              component = { PlaceView }
              backButtonImage = { BackButtom } 
              renderBackButton = { IconBack} 
              
              leftTitle = ' '/>
              <Scene
                key = 'about'
                component = { About }
                title = 'Acerca de Skrapp'
                titleStyle={{color: '#fff'}}
                backButtonImage = { BackButtom }
                renderBackButton = { IconBack} 
                leftTitle = ' '/>
                <Scene
                  key = 'myFavorites'
                  title = 'Mis Favoritos'
                  titleStyle = {{ color: '#fff'}}
                  backButtonImage = { BackButtom } 
                  renderBackButton= { IconBack } 
                  component = { MyFavoriteView }

                />
              <Scene
                hideNavBar
                key = 'search'
                component = { Search }/>
            <Scene
              key = 'settings'
              component = { Settings }
              title = 'Ajustes'
              backButtonImage = { BackButtom } 
              renderBackButton={IconBack} 
              titleStyle = {{ color: '#fff' }} />
            <Scene
              key = 'map'
              title = 'Mapa'
              component = { MapView }
              backButtonImage = { BackButtom } 
              renderBackButton={IconBack} 
              titleStyle = {{ color: '#fff' }} />
              <Scene
                key = 'website'
                component = { WebSite }
                backButtonImage = { BackButtom } 
                renderBackButton = { IconBack } 
                titleStyle = {{ color: '#fff' }} />
              <Scene
                key = 'review'
                component = { Review }
                title = 'Reseñar'
                backButtonImage = { BackButtom } 
                renderBackButton = { IconBack }                 
                leftTitle = ''
                titleStyle = {{ color: '#fff' }} />
          </Scene>
      </Router>
    )
  }
}