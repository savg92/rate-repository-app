import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Rate repository application</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#24292e',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#ffffff',
		fontSize: 30,
		fontWeight: 'bold',
		padding: 20,
	},
});

export default Main;