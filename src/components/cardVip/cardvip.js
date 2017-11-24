import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Rating from 'react-native-easy-rating'

export default class CardVip extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { porciento, img, title, discount, before, after, nameplace } = this.props.vip
    return (
      <View style={styles.containerCard}>

        <View style={styles.containerHeader}>
          <View style={styles.discount}>
            <Text style={styles.textDiscount} > {porciento} </Text>
          </View>
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={{ uri: img }}
            />
          </View>
        </View>

        <View style={styles.containerInfo} >
          <Text style={styles.title}> {title}</Text>

          <View style={styles.containerBeforeAfter}>
            <Text style={styles.before}> {before}</Text>
            <Text style={styles.after}> {after}</Text>
          </View>

          <View style={styles.containerTagPlace}>
            <Icon
              style={styles.iconTag}
              name='tag'
              size={16}
              color='#dcb539' />
            <Text style={styles.namePlace} > {nameplace}</Text>
          </View>

          <Rating
            rating={this.props.ranking}
            editable={false}
            iconWidth={15}
            iconHeight={15}
            max={5}
            onRate={() => null}
            iconSelected={require('../../../assets/images/star.png')}
            style={styles.ratingstar}
          />
        </View>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: 'white',
    margin: 5,
    paddingBottom: 5,
    borderRadius: 4,
    maxWidth: 180,

    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  },
  containerHeader: {},

  discount: {
    backgroundColor: '#dcb539',

    width: 45,
    height: 45,

    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 4,

    alignItems: 'center',
    justifyContent: 'center'
  },
  textDiscount: {
    color: '#844B23',
    backgroundColor: 'transparent',
    fontWeight: '400',
    fontSize: 15,
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
  },
  containerImage: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  image: {
    width: 170,
    height: 120,
    backgroundColor: 'black',

  },
  containerInfo: { padding: 5, },
  title: {
    color: '#4A4A4A',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontWeight: '400',
    fontSize: 19,

  },
  containerBeforeAfter: {
    paddingVertical: 10,
    paddingBottom: 5,
  },
  before: {
    textDecorationLine: 'line-through',
    color: '#9B9B9B',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    paddingVertical: 5,
    fontSize: 16,

  },
  after: {
    color: '#4A4A4A',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 20,
  },
  containerTagPlace: {
    flexDirection: 'row',
    alignItems: 'center',


  },
  iconTag: {},
  namePlace: {
    color: '#4A4A4A',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 14,
  },
  ratingstar: {
    paddingVertical: 2,

  },

})