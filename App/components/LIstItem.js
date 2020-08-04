import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {
	Animated,
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Platform
} from 'react-native'

const LeftActions = (progress, dragX) => {
	const scale = dragX.interpolate({
		inputRange: [ 0, 100 ],
		outputRange: [ 0, 1 ],
		extrapolate: 'clamp'
	})
	return (
		<View style={styles.leftAction}>
			<Animated.Text
				style={[ styles.actionText, { transform: [ { scale } ] } ]}
			>
				Add to Cart
			</Animated.Text>
		</View>
	)
}

const RightActions = (progress, dragX) => {
	const scale = dragX.interpolate({
		inputRange: [ -100, 0 ],
		outputRange: [ 1, 0 ],
		extrapolate: 'clamp'
	})
	return (
		<View style={styles.rightAction}>
			<Animated.Text
				style={[ styles.actionText, { transform: [ { scale } ] } ]}
			>
				Delete
			</Animated.Text>
		</View>
	)
}

const ListItem = ({
	name,
	onFavouritePress,
	isFavourite,
	onAddedSwipe,
	onDeleteSwipe
}) => {
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
		<Swipeable
			renderLeftActions={onAddedSwipe && LeftActions}
			renderRightActions={onDeleteSwipe && RightActions}
			onSwipeableLeftOpen={onAddedSwipe}
			onSwipeableRightOpen={onDeleteSwipe}
		>
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
		</Swipeable>
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
	},
	leftAction: {
		flex: 1,
		backgroundColor: '#388e3c',
		justifyContent: 'center'
	},
	rightAction: {
		flex: 1,
		backgroundColor: '#dd2c00',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	actionText: {
		color: 'white',
		fontWeight: '600',
		padding: 20
	}
})

export const Separator = () => <View style={styles.separator} />

export default ListItem
