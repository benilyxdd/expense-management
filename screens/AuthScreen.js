import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AuthScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>This is auth screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default AuthScreen;
