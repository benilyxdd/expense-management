import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const HeaderText = (props) => {
	return (
		<SafeAreaView style={styles.headerContainer}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</SafeAreaView>
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
