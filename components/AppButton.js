import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = (props) => {
	return (
		<View style={styles.wholeContainer}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={props.onPress} style={styles.button}>
					{props.children}
				</TouchableOpacity>
			</View>
			<View style={styles.appTitleContainer}>
				<Text style={styles.title}>{props.title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wholeContainer: {
		width: 50,
		height: 65,
		marginBottom: "4%",
		margin: "4%",
	},
	buttonContainer: {
		backgroundColor: "white",
		width: 50,
		height: 50,
		borderRadius: 10,
		overflow: "hidden",
	},
	appTitleContainer: {
		width: 50,
		height: 15,
	},
	button: {
		width: "100%",
		height: "100%",
	},
	title: {
		textAlign: "center",
		fontSize: 12
	},
});

export default AppButton;
