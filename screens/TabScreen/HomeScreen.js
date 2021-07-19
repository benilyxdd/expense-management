import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";

const HomeScreen = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="Home" />
			<View>
				<Text>This is a Home Screen</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default HomeScreen;
