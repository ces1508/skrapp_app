import React, { Component } from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import CategoriesView from '../pages/categoriesView'
import DetailCategory from '../pages/detailCategory'
import PlaceView from '../pages/placeView'
import LoginView from '../pages/login'
import RegistryView from '../pages/registry'
import MyFavoriteView from '../pages/myfavorites'
import Menu from '../components/menu'
import IconSearch from '../components/iconSearch'
import About from '../pages/about'
import Search from '../pages/search'
import Settings from '../pages/settings'
import MapView from '../pages/map'
import WebSite from '../pages/website'
import { AlreadyUser } from '../utils'
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

  componentWillMount() {
    this.requireLogin()
    window.navigator.geolocation.getCurrentPosition( (position) => {
      window.position = position.coords
    }, ( (error) => {
      // throw error
      console.log(error)
      window.position = {
        error: true,

      }
    }),  {enableHighAccuracy: false, timeout: 2000, maximumAge: 1000})
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
      <Router sceneStyle = {{backgroundColor: '#f4f4f4' }}>
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#f99800' }} backButtonImage = { BackButtom  } titleStyle = {{ color: '#fff' }}>
            <Scene
              key = 'login'
              component = { LoginView }
              hideNavBar
              type = 'modal'
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
                renderRightButton = {IconSearch}
                onRight = { () => alert('hola') }
              />
            </Scene>
            <Scene
              key = 'detailCategory'
              component = { DetailCategory }
              leftTitle = ""
               titleStyle = {{ color: '#fff' }}
               onRight = {() => alert('buscando dentro de la categoria')}
               renderRightButton = {IconSearch}/>
            <Scene
              key = 'place'
              component = { PlaceView }
              leftTitle = ' '/>
              <Scene
                key = 'about'
                component = { About }
                title = 'Acerca de Skrapp'
                titleStyle={{color: '#fff'}}
                leftTitle = ' '/>
                <Scene 
                  key = 'myFavorites'
                  title = 'Mis Favoritos'
                  titleStyle = {{ color: '#fff'}}
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
              titleStyle = {{ color: '#fff' }} />
            <Scene
              key = 'map'
              title = 'Mapa'
              component = { MapView }
              titleStyle = {{ color: '#fff' }} />
              <Scene
                key = 'website'
                component = { WebSite }
                titleStyle = {{ color: '#fff' }} />
          </Scene>
      </Router>
    )
  }
}