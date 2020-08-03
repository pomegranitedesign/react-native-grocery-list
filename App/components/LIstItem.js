import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Platform
} from 'react-native'

const ListItem = ({ name, onFavouritePress, isFavourite }) => {
	// Get the required star icon according to the isFavorite prop
	let starIcon
	if (isFavourite)
		starIcon = Platform.select({
			ios: require('../assets/icons/ios-star.png'),
			android: require('../assets/icons/md-star.png')
		})
	else
		starIcon = Platform.select({
			ios: require('../assets/icons/ios-star-outline.png'),
			android: require('../assets/icons/md-star-outline.png')
		})

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{name}</Text>
			{onFavouritePress && (
				<TouchableOpacity
					onPress={onFavouritePress}
					activeOpacity={0.5}
				>
					<Image
						source={starIcon}
						style={styles.icon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flexDirection: 'row',
		backgroundColor: 'white',
		justifyContent: 'space-between'
	},
	text: {
		fontSize: 18,
		color: '#696969'
	},
	icon: {
		height: 30,
		tintColor: '#696969',
		...Platform.select({
			ios: {
				tintColor: 'blue'
			},
			android: {
				tintColor: 'red'
			}
		})
	},
	separator: {
		flex: 1,
		height: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	}
})

export const Separator = () => <View style={styles.separator} />

export default ListItem
