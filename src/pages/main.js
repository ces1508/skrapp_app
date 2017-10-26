import React, { Component } from 'react'
import { View } from 'react-native'
import Card from '../components/card'
import PlaceCard from '../components/placeCard'

import Category from '../components/category'
export default class Main extends Component {
	constructor(props) {
		super()
	}

	render() {
		return(
			<View style = {{ marginTop: 60}} >
				<Card text = 'juan daniel'>
					<PlaceCard 
						address = 'calle 24 # 3 a 16' 
						distance = {200} 
						unidad = 'metros' 
					/>
				</Card>
        <Card text = 'abogados'>
					<Category availables = {25} />
				</Card>
        <Card text = 'comidas rapidas'>
					<Category availables = {10} />
				</Card>
        <Card text = 'Aseo'>
					<Category availables = {5} />
				</Card>
        <Card text = 'Acarreos'>
					<Category availables = {15} />
				</Card>
			</View>
		)
	}
}	
