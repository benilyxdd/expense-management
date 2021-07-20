import React from "react";
import { IconButton, Colors } from "react-native-paper";
import { StyleSheet } from "react-native";

const AddTransactionButton = (props) => {
	return (
		<IconButton
			icon="plus"
			size={32}
			onPress={() => console.log("hi")}
			color={Colors.white}
			style={styles.button}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "black",
	},
});

export default AddTransactionButton;
