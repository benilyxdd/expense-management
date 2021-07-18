import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = (props) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={props.onPress} style={styles.button}>
				<Text>{props.children}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
    button: {
		
    },
    buttonContainer: {
		margin: 25,
		backgroundColor: 'blue'
    }
});

export default AppButton;
