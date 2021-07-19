import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";

const ExpenseScreen = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="Expense" />
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
