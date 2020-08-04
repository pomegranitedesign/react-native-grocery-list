import React, { useRef } from 'react'
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native'

const AddItem = ({ onSubmitEditing, style, ...rest }) => {
	const input = useRef(null)
	return (
		<View style={styles.container}>
			<TextInput
				{...rest}
				ref={input}
				style={[ styles.input, style ]}
				placeholder="Add new item"
				onSubmitEditing={(event) => {
					if (onSubmitEditing) onSubmitEditing(event)
					input.current.clear()
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		padding: 20
	},

	input: {
		backgroundColor: '#ffffff',
		fontSize: 18,
		padding: 10,
		borderRadius: 3
	}
})

export default AddItem
