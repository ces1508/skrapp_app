import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform
} from 'react-native'


export default Marker = (props) => {
  let { place } = props
  return(
    <View style={styles.containerTooltip}>
      <View style={styles.containerImage}>
        <Image source={{ uri: place.imageThumb.url }}
          style={styles.image} />
      </View>
      <View >
        <Text style={styles.titleMarker}> {place.title} </Text>
        <Text ellipsizeMode = 'tail' numberOfLines = { 5 } style={styles.descriptionMarker}> {place.description} </Text>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  containerTooltip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fefefe',
    borderRadius: 2,
    flex: 1,
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'rgba(0,0,0,.1)',
    shadowOpacity: 1.0,
    overflow: 'hidden',

  },
  containerImage: {
    marginRight: 5,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: Platform.OS === 'android' ? 50 : 25,
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: Platform.OS === 'android' ? 50 : 25,
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden'
  },
  titleMarker: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed' : 'Roboto Condensed',
    fontWeight: '400',
    marginBottom: 5,
    color: '#454545',
    maxWidth: 280,
  },
  descriptionMarker: {
    fontSize: 14,
    flexWrap: 'wrap',
    maxWidth: 250,
    lineHeight: 18
  }

})

