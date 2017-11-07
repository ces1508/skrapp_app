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

export const getCurrentPosition = async () =>  {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords
        data = {
        latitude,
        longitude
      }
      LastPosition(data)
      .then()
      .catch()
      return resolve(data)
    }, (e) => {
        return resolve({error: true})
    })
  })
}

export const setUnidad = async (und = 'km') => {
  try {
    await AsyncStorage.setItem('@unidad', und)
    return true
  } catch (e) {
    return false
  }
}

export const getUnidad = async () => {
  try {
    let unidad = await AsyncStorage.getItem('@unidad')
    return unidad
  } catch (e) {
    return 'km'
  }
}

export const setMapStyle = async (style = 'standard') => {
  try {
    await AsyncStorage.setItem('@mapStyle', style)
  } catch (e) {
    return false
  }
}

export const getMapStyle = async () => {
  try {
    let style = await AsyncStorage.getItem('@mapStyle')
    return style
  } catch (e) {
    return 'standard'
  }
}
export const LastPosition = async (position) => {
  try {
      let Lposition = await AsyncStorage.getItem('@LastPosition')
      Lposition = JSON.parse(Lposition)
      if ( Lposition !== null && (position.latitude !== Lposition.latitude || position.longitude !== Lposition )) {
        await AsyncStorage.setItem('@LastPosition', JSON.stringify(position))
      } else {
        await AsyncStorage.setItem('@LastPosition', JSON.stringify(position))
      }
    } catch (e) {
      // console.log(e.message)
      return null
  }
}

export const getLastPosition = async () =>  {
  try {
    let lastp = await AsyncStorage.getItem('@LastPosition')
    if(lastp) {
      lastp = JSON.parse(lastp)
      return lastp
    }
    return { error: true }
  } catch (e) {
    return { error: true }
  }
}