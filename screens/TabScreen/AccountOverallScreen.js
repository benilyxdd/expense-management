import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Divider, List } from "react-native-paper";

import AccountPicker from "../../components/AccountPicker";
import DataTableRow from "../../components/DataTableRow";
import TouchableListItem from "../../components/TouchableListItem";

const asset = "100";
const liabilities = "200";
const total = "-100";

const ExpenseScreen = () => {
	const [content, setContent] = useState("a");

	return (
		<View style={styles.screen}>
			<AccountPicker onChangeAccount={(value) => setContent(value)} />
			<View>
				<DataTableRow cells={["Asset", "Liabilities", "Total"]} />
				<DataTableRow
					cells={[asset, liabilities, total]}
					rowStyle={styles.lastRow}
				/>
			</View>
			<ScrollView style={styles.detailsSection}>
				<List.Section title="hello">
					<Divider />
					<TouchableListItem title="hi" />
				</List.Section>
				<List.Section title="hello">
					<Divider />
					<TouchableListItem title="hi" />
				</List.Section>
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
		borderBottomWidth: 2,
		marginTop: -25,
	},
	detailsSection: {
		// backgroundColor: "blue",
	},
});

export default ExpenseScreen;
