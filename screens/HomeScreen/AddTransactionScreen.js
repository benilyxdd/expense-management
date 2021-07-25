import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const AddTransactionScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.textInputContainer}>
				<TextInput />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default AddTransactionScreen;
