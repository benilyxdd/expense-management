import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomContainer from "../components/CustomContainer";

const AppSelectionScreen = (props) => {
	return (
		<View style={styles.main}>
			<View style = {styles.textContainer}>
				<Text>Select App</Text>
			</View>
			<CustomContainer style={{ ...styles.main, ...styles.container }}>
				<Text>hi</Text>
			</CustomContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		height: '90%',
		backgroundColor: 'white'
	},
	container: {
		flex: 10
	},
	textContainer: {
		flex: 1
	}
});

export default AppSelectionScreen;
