import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";

const HomeScreen = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="Home" />
			<View style={styles.middleScreen}>
				<View style = {styles.pieChartContainer}>
				</View>
				<Text>This is a Home Screen</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	middleScreen: {
		flex: 1,
	},
	pieChartContainer: {
		height: '35%',
		width: '100%',
		backgroundColor: 'grey',
		flexDirection: 'row'
	}
});

export default HomeScreen;
