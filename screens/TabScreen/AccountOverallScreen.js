import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import AccountPicker from "../../components/AccountPicker";

const ExpenseScreen = () => {
	const [content, setContent] = useState({});
	console.log(content);

	return (
		<View style={styles.screen}>
			<AccountPicker onChangeAccount={(value) => setContent(value)} />
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
