import setup from '../setup'
import axios from 'axios'

const { API_SKRAPP, APPLICATION_ID } = setup
import { getCurrentUser } from '../utils'

export default class Api {
  constructor() {
    this.getCategories = this.getCategories.bind(this)
  }

  static async getCategories() {
    try {
      let endpoint = `${API_SKRAPP}/classes/Category`
      let request = await fetch(endpoint, {
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID
        },
      })
      let data = await request.json()
      return data.results
      return []
    } catch (e) {
      console.log('error', e)
      return []
    }
  }


  static async getItemsByCategory(id, location = null)  {
    let where = {}
    if (location) {
      where = {
        category: {
          __type: "Pointer", className: 'Category',"objectId": id
        } ,
        location: {
          "$nearSphere": {
            "__type": "GeoPoint",
            "latitude": location.latitude,
            "longitude": location.longitude
          },
          $maxDistanceInKilometers: 100
        }
      }
    } else {
      where = {
        category: {
          __type: "Pointer", className: 'Category',"objectId": id
        }
      }
    }
    try {
      let endpoint = `${API_SKRAPP}/classes/Place`
      let request = await axios.get(endpoint, {
        params: {
          where: where
        },
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID
        }
      })
      let data = request.data
      return data.results
    } catch (e) {
      console.log('error', e)
      return []
    }
  }

  static async filterPlaceByName (text, categoryId) {
    let where = {}
    let title = text.toLowerCase()
    if (window.position.error) {
      where = {
        canonical: {
          $regex: title
        }
      }
    } else {
      where = {
        canonical: {
          $regex: title
        },
        location: {
          "$nearSphere": {
            "__type": "GeoPoint",
            "latitude": window.position.latitude,
            "longitude":  window.position.longitude
          },
        }
      }
    }
    try {
      let endpoint = `${API_SKRAPP}/classes/Place`
      let request = await axios.get(endpoint, {
        params: {
          where: where
        },
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID
        }
      })
      let data = request.data
      return data.results
    } catch (e) {
    }
  }
  static async signIn (username, password) {
    let endpoint = `${API_SKRAPP}/login`
    try {
      let request = await axios.get(endpoint, {
        params: {
          username: username.toLowerCase(),
          password: password
        },
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID,
          "X-Parse-Revocable-Session": 1,
        }
      })
      let data = request.data
      return data
    } catch (e) {
      if (e.message === 'Request failed with status code 404') {
        return {error: true, title: 'Usuario y contraseia incorrectos', message: 'por favor verifica tus credenciales'}
      }
    }
  }

  static async getPlacesByPosition (location) {
    let where = {}
    if (location) {
      where = {
        location: {
          "$nearSphere": {
            "__type": "GeoPoint",
            "latitude": location.latitude,
            "longitude": location.longitude
          },
          $maxDistanceInKilometers: 100
        }
      }
    }
    let endpoint = `${API_SKRAPP}/classes/Place`
    try {
      let request = await axios.get(endpoint, {
        params: {
          include: 'category',
          where: where
        },
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID

        }
      })
      let data = request.data
      return data.results
    } catch (e) {
      console.log('error', e,response)
      return []
    }
  }
  static async saveUser (data) {
    let endpoint = `${API_SKRAPP}/users`

    try {
      let request = await axios.post(endpoint, data, {
        headers: {
          'X-Parse-Application-Id': 'rzTRzPoG564M566g',
          'X-Parse-Revocable-Session': '1',
          'content-type': 'application/json'
        },
      })
      return { status: 'success', data: request.data }
    } catch (e) {
      if (e.response.data.code === 202) {
        return { status: 'failed', data: e.response.data }
      } else {
        return { status: 'failed', data: { code: 500, message: 'estamos presentando problemas con nuestros servidores' } }
      }
    }
  }
  static async likePlace (place) {
    let endpoint = `${API_SKRAPP}/functions/likePlace`
    let currentUser = await getCurrentUser()
    let data = {
      placeId: place.objectId
    }
    try {
      let request = await axios.post(endpoint, data, {
        headers: {
          'X-Parse-Application-Id': 'rzTRzPoG564M566g',
          'X-Parse-Session-Token': currentUser.sessionToken,
          'content-type': 'application/json'
        },
      })

      return { status: 'success', data: request.data.result }
    } catch (e) {
      if (e.response.data.code >= 400 && e.response.data.code < 500) {
        return { status: 'failed', data: e.response.data }
      } else {
        return { status: 'failed', data: { code: 500, message: 'estamos presentando problemas con nuestros servidores' } }
      }
    }
  }

  static async placeAlradyLiked (place) {
    let endpoint = `${API_SKRAPP}/functions/isPlaceLiked`
    let currentUser = await getCurrentUser()

    let data = {
      placeId: place.objectId
    }
    try {
      let request = await axios.post(endpoint, data, {
        headers: {
          'X-Parse-Application-Id': 'rzTRzPoG564M566g',
          'X-Parse-Session-Token': currentUser.sessionToken,
          'content-type': 'application/json'
        },
      })
      return { status: 'success', liked: request.data.result }
    } catch (e) {
      if (e.response.data.code >= 400 && e.response.data.code < 500) {
        return { status: 'failed', data: e.response.data }
      } else {
        return { status: 'failed', data: { code: 500, message: 'estamos presentando problemas con nuestros servidores' } }
      }
    }
  }
  static async getFavorites () {
    let endpoint = `${API_SKRAPP}/classes/Place`
    let { objectId } = await getCurrentUser()
    let user = {
      objectId,
      className: "_User",
      __type: 'Pointer'
    }
    try {
      let request = await axios.get(endpoint, {
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID
        },
        params: {
          where: {
            likes: user,
            isApproved: true
          }
        },
      })
      return request.data.results
    } catch (e){
      return { error: true }
    }
  }

  static async loginFacebook (auth) {
    let endpoint = `${API_SKRAPP}/users`
    let data = {
      authData: {
         facebook: {
          id: auth.userID,
          access_token: auth.accessToken,
          expiration_date: auth.expirationTime
        }
      }
    }
    try {
      let request = await axios.post(endpoint, data, {
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID
        }
      })

      return request.data
    } catch (e) {
      return { error: true }
    }
  }
}