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
		height: "10%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		// fontFamily: "Caveat-Regular",
		fontSize: 25,
	},
});

export default HeaderText;
