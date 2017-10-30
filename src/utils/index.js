import {
  AsyncStorage
} from 'react-native'

export const  SaveTokens = async  (data) => {
  try {
    await AsyncStorage.setItem('tokens', JSON.stringify(data))
    return true
  } catch (e){
    return false
  }
}

export const AlreadyUser = async () => {
  try {
    let user = await AsyncStorage.getItem('tokens')
    if (user !== null) {
      return true
    }
    return false
  } catch (e) {
    return false
  }
}

export const DestroySession = async () => {
  try {
    await AsyncStorage.removeItem('tokens')
    return true
  } catch (e) {
    return false
  }
}
export const getCurrentUser = async () => {
  try {
    let currentUser = await AsyncStorage.getItem('tokens')
    currentUser = JSON.parse(currentUser)
    return currentUser
  } catch (e) {
    return false
  }
}

export const getCurrentPosition = () =>  {
  try {
     window.navigator.geolocation.getCurrentPosition((position) => {
       let { latitude, longitude } = window.position
       if (latitude !== position.coords.latitude || longitude !== position.coords.longitude) {
         window.position = position.coords
       }
    }, (error => {
    }), { enableHighAccuracy: false, timeout: 4000, maximumAge: 1000  })
  } catch (e) {
    alert('estamos presentando problemas para obetner tu posicion, \n tal vez tu esperiacia en skrapp no se la idea')
  }
}