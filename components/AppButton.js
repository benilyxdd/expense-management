import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const AppButton = (props) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={props.onPress} style={styles.button}>
				<Image source={{ uri: props.address }} style={styles.image} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: "100%",
	},
	buttonContainer: {
		backgroundColor: "white",
		width: 50,
		height: 50,
		marginBottom: "4%",
		margin: "4%",
	},
	image: {
		resizeMode: "contain",
		flex: 1,
		width: "100%",
		height: "100%",
	},
});

export default AppButton;
