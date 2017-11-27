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
  Dimensions,
} from 'react-native'

export default class Vip extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View  style = { styles.container }>
        <View style = { styles.containerInfo}>
          <Text style={styles.title}> Now, if you are interested in being the best player, getting really good money and knowing some tricks </Text>

          <View style = { styles.containerDiscount }> 

            <View style = { styles.containerBeforeAfter}> 
              <Text style = { styles.before }> $40.000</Text>
              <Text style = { styles.after }>$20.000 </Text>
            </View>

            <View style = { styles.porcentage }>
              <Text style = { styles.textPorcentage }> 50%</Text>
            </View>

          </View>
        </View>

        <View style = { styles.button }>
          <Text style = { styles.textButtom }> Donde comprar</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerInfo: {
    paddingHorizontal: 5,
  },
  title: {
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 25,
  },
  containerDiscount: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerBeforeAfter: {},
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
    fontSize: 30,
  },
  porcentage: {
    backgroundColor: '#dcb539',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 4,

    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: .12,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  },
  textPorcentage: {
    color: '#844B23',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#154E8F',
    borderRadius: 4,
    paddingHorizontal: 60,

    paddingVertical: 7,
    marginVertical: 10,
    marginBottom: 30,

    justifyContent: 'center',

    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: .12,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  },
  textButtom: {
    color: '#fff',
    fontFamily: Platform.OS === 'android' ? 'RobotoCondensed-Regular' : 'RobotoCondensed-Regular',
    fontSize: 18,
    textAlign: 'center',
  },
})