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
		height: "11%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderBottomColor: "black",
		borderBottomWidth: 2,
	},
	headerTitle: {
		// fontFamily: "Caveat-Regular",
		fontSize: 25,
		paddingBottom: "1%",
	},
});

export default HeaderText;
