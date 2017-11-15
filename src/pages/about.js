import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style = {{ flex: 1 , }} >
        <ScrollView contentContainerStyle = { styles.container } >
          <View style = { styles.containerImage }>
            <Image style = { styles.image } source = {require('../../assets/images/skrappcolor.png')} />
          </View>
          <View style = {{ marginTop: 20 }} >
            <Text style = { styles.name }> Skrapp Colombia </Text>
            <Text style = { styles.version }> Versión 3.2.0 </Text>
          </View>
          <View>
            <Text style = { styles.description }>
            SKRAPP COLOMBIA es una red comercial virtual conformada por App (ANDROID -IOS), PAGINA WEB, FAN PAGE e INSTAGRAM. Con el desarrollo de esta plataforma, se busca que la población tenga a la mano información detallada de establecimientos y servicios ofrecidos en los diferentes municipios del territorio colombiano, de forma fácil y rápida.

            Nuestro Plan tiene la finalidad de fortalecer y mejorar el servicio que brindan las empresas y los prestadores de servicios que ingresen a nuestra plataforma, para esto presentamos un conjunto de estrategias orientadas a incrementar la popularidad con el fin de lograr estándares de balance comercial, además de beneficiar a los usuarios con los distintos opciones y beneficios que brinda SKRAPP COLOMBIA dentro de nuestro territorio. Nuestro objetivo es captar como público a toda la población residente en nuestro país sean estos nacionales o extranjeros para que puedan disfrutar, y encontrar de manera fácil y rápida todo lo que necesiten.

            Nos enfocamos también en una estrategia de difusión y posicionamiento de la marca SKRAPP COLOMBIA, con un Plan de Marketing desarrollado de acuerdo a las exigencias de un país moderno y globalizado, poniendo énfasis en la calidad del servicio que brindamos a través de nuestra plataforma.

            Nuestra misión está basada en la potenciación de las estrategias empleadas dentro y fuera de nuestra plataforma y su modalidad de operación, también la de incrementar y fortalecer las estrategias de vínculo con los usuarios a quienes debemos mantener dentro de este plan de marketing para generar los mecanismos de satisfacción necesaria, atraerlos masivamente y tener un gran comunidad skrappdependiente.
            </Text>
          </View>
          <View  style = { styles.social }>
            <Icon name = 'facebook-official' size = {30} color = '#4c4c4c'/>
            <Icon name = 'twitter' size = {30} color = '#4c4c4c' />
            <Icon name = 'instagram' size = {30} color = '#4c4c4c' />
            <Icon name = 'youtube-play' size = {30} color = '#4c4c4c' />
          </View>
          <View style = { styles.copyright }>
            <Icon name = 'copyright' size = {20}/>
            <Text style = { styles.copyrightText }>2017 Todos los derechos reservados.</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fefefe',
    paddingBottom: 25,
  },
  name: {
    color: '#454545',
    fontSize: 25,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '500',
    letterSpacing: .25,
    marginTop: 10,
  },
  version: {
    marginTop: 10,
    color: '#7d7d7d',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 17,
    letterSpacing: .25,
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f08300',
    height: 250,
    width: 400,
  },
  image: {
    width: 180,
    height: 180
  },
  description: {
    color: '#454545',
    fontSize: 17,
    marginTop: 20,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    textAlign: 'justify',
    lineHeight: 25,
  },
  social: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    width: 200,
  },
  copyright: {
    marginTop: 30,
    flexDirection: 'row',
  },
  copyrightText: {
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
    letterSpacing: .25,
    color: '#454545',
    marginLeft: 10,
    fontSize: 17, 
  }
})
