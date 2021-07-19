import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AccountPicker from "../../components/AccountPicker";

const ExpenseScreen = () => {
	return (
		<View style={styles.screen}>
			<AccountPicker/>
			<Text>This is a expense screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default ExpenseScreen;
