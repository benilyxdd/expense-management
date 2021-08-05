import React from "react";
import { List } from "react-native-paper";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

const RecentTransactionsContainer = (props) => {
	const userTransactions = useSelector(
		(state) => state.Auth.userData.transactions
	);
	const userTransactionsArray = userTransactions // object of object -> array of object
		? Object.keys(userTransactions)
				.map((key) => {
					return userTransactions[key];
				})
				.reverse()
				.slice(0, 10)
		: [];

	return (
		<View style={styles.screen}>
			{userTransactions && (
				<List.Section style={styles.listContainer}>
					<ScrollView>
						{userTransactionsArray.map((item, index) => {
							return (
								<List.Item
									key={index}
									title={`${item.amount}`}
									description={`${item.category} - ${item.description}`}
									style={styles.listItem}
								/>
							);
						})}
					</ScrollView>
				</List.Section>
			)}
			{!userTransactions && (
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						You don't have any transactions.
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		marginVertical: "-2%",
	},
	listItem: {
		marginHorizontal: "5%",
		marginVertical: "2%",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "black",
	},
	screen: {
		flex: 1,
	},
	textContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontFamily: "Caveat-bold",
		fontSize: 30,
	},
});

export default RecentTransactionsContainer;
