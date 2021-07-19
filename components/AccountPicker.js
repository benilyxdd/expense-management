import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const AccountPicker = (props) => {
	return (
		<SafeAreaView style={styles.headerContainer}>
			
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
	header: {
		// fontFamily: "Caveat-Regular",
		fontSize: 25,
		paddingBottom: "1%",
	},
});

export default AccountPicker;
