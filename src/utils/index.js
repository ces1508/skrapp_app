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

export const getCurrentPosition = () =>  {
  try {
     window.navigator.geolocation.getCurrentPosition((position) => {
      window.position = position.coords
    }, (error => {
      window.position = {
        error: true
      }
      console.log('error ', error.message)
    }), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000  })
  } catch (e) {
    alert('error ')
  }
}