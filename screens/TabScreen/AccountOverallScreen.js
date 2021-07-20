import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Divider } from "react-native-paper";

import AccountPicker from "../../components/AccountPicker";
import DataTableRow from "../../components/DataTableRow";

const asset = "100";
const liabilities = "200";
const total = "-100";

const ExpenseScreen = () => {
	const [content, setContent] = useState("a");

	return (
		<View style={styles.screen}>
			<AccountPicker onChangeAccount={(value) => setContent(value)} />
			<ScrollView>
				<DataTableRow cells={['Asset', 'Liabilities', 'Total']} />
				<DataTableRow cells={[asset, liabilities, total]} rowStyle={ styles.lastRow}/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	dataTable: {
		alignItems: "center",
		justifyContent: "center",
	},
	lastRow: {
		borderBottomWidth: 2
	}
});

export default ExpenseScreen;
