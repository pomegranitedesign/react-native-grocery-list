import React, { Fragment } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import nachos from '../data/nachos'
import ListItem, { Separator } from '../components/LIstItem'

export default () => (
	<SafeAreaView>
		<ScrollView>
			{nachos.map((item, index) => (
				<Fragment key={item.id}>
					<ListItem
						name={item.name}
						isFavourite={index % 2 === 0}
						onFavouritePress={() =>
							alert('TODO Handle Favourite Press')}
					/>
					<Separator />
				</Fragment>
			))}
		</ScrollView>
	</SafeAreaView>
)
