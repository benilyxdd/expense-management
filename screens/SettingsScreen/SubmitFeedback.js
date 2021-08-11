import React from "react";
import { View, StyleSheet } from "react-native";
import { TextArea, TextField } from "react-native-ui-lib";

const SubmitFeedback = () => {
	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextField placeholder="subject" />
				<TextArea placeholder="add something..." />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	inputContainer: {
		width: "90%",
		height: "50%",
		margin: "3%",
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 15,
		padding: "3%",
	},
});

export default SubmitFeedback;
