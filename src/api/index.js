import setup from '../setup'
import axios from 'axios'

const { API_SKRAPP, APPLICATION_ID } = setup

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
    console.log('location', location)
    console.log('id ', id)
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
      console.log(e)
      if (e.message === 'Request failed with status code 404') {
        return {error: true, title: 'Usuario y contraseia incorrectos', message: 'por favor verifica tus credenciales'}
      }
    }
  }

  static async getPlacesByPosition (location) {
    let endpoint = `${API_SKRAPP}/classes/Place`
    try {
      let request = await axios.get(endpoint, {
        params: {
          include: 'category',
          where: {
            location: {
              "$nearSphere": {
                "__type": "GeoPoint",
                "latitude": location.latitude,
                "longitude": location.longitude
              },
              $maxDistanceInKilometers: 100
            }
          }
        },
        headers: {
          "content-type": "application/json",
          "X-Parse-Application-Id": APPLICATION_ID

        }
      })
      let data = request.data
      console.log('data', data)
      return data.results
    } catch (e) {
      console.log('error', e)
      return []
    }
  }
}