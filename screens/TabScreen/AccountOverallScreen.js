import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";
import { useSelector } from "react-redux";

import DataTableRow from "../../components/DataTableRow";
import TouchableListItem from "../../components/TouchableListItem";

const AccountOverallScreen = (props) => {
	const userBasicInfo = useSelector((state) => state.Auth.userData.basicInfo);

	return (
		<View style={styles.screen}>
			<View style={styles.dataTableSection}>
				<DataTableRow
					cells={[
						{ name: "Income", amounts: userBasicInfo.income },
						{ name: "Expenses", amounts: userBasicInfo.expenses },
						{ name: "Total", amounts: userBasicInfo.total },
					]}
				/>
			</View>
			<ScrollView style={styles.detailsSection}>
				<List.Section title="hello">
					<Divider />
					<TouchableListItem title="hi" />
					<TouchableListItem title="hi" />
				</List.Section>
				<List.Section title="hello">
					<Divider />
					<TouchableListItem title="hi" />
					<TouchableListItem title="hi" />
					<TouchableListItem title="hi" />
					<TouchableListItem title="hi" />
				</List.Section>
				<List.Section title="hello">
					<Divider />
					<TouchableListItem title="hi" />
					<TouchableListItem title="hi" />
					<TouchableListItem title="hi" />
					<TouchableListItem title="hi" />
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
	detailsSection: {},
	dataTableSection: {
		height: "7%",
		borderBottomColor: "grey",
		borderBottomWidth: 2,
	},
});

export default AccountOverallScreen;
