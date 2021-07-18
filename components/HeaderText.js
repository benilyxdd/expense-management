import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HeaderText = (props) => {
	return (
		<View style={{ ...styles.headerContainer, ...props.containerStyle }}>
			<Text style={{ ...styles.headerTitle, ...props.textStyle }}>
				{props.title}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flex: 1,
	},
	headerTitle: {
		// fontFamily: "Caveat-Regular",
		fontSize: 25,
	},
});

export default HeaderText;
