import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { SafeAreaView, FlatList, KeyboardAvoidingView } from 'react-native'
import nachos from '../data/nachos'
import AddItem from '../components/AddItem'
import ListItem, { Separator } from '../components/LIstItem'

const CurrentList = () => {
	const [ list, setList ] = useState(nachos)
	return (
		<SafeAreaView>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" />
			<FlatList
				data={list}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={() => <Separator />}
				ListHeaderComponent={() => (
					<AddItem
						onSubmitEditing={({ nativeEvent: { text } }) => {
							setList([ { id: uuid(), name: text }, ...list ])
						}}
					/>
				)}
				renderItem={({ item, index }) => (
					<ListItem
						name={item.name}
						isFavourite={index % 2 === 0}
						onAddedSwipe={() => alert('TODO onAddedSwipe')}
						onDeleteSwipe={() => alert('TODO onDeleteSwipe')}
						onFavouritePress={() =>
							alert('TODO Handle Favourite Press')}
					/>
				)}
			/>
		</SafeAreaView>
	)
}

export default CurrentList
