import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Pie from "../../components/Pie";
import PieChartData from "../../data/PieChartData";
import RecentTransactionsContainer from "../../components/RecentTransactionsContainer";
import RecentTransactionData from "../../data/RecentTransactionData";
import AddTransactionButton from "../../components/AddTransactionButton";

const HomeScreen = (props) => {
	const GoToAddTransactionPageHandle = () => {
		props.navigation.navigate("Add Transaction");
	};

	return (
		<View style={styles.screen}>
			<View style={styles.middleScreen}>
				<View style={styles.pieChartContainer}>
					<Pie data={PieChartData} />
					<View style={styles.remainingBudgetContainer}>
						<Text style={styles.remainingBudgetText}>
							Remaining
						</Text>
						<Text style={styles.remainingBudgetText}>Budget: </Text>
						<Text style={styles.remainingBudgetText}>$100</Text>
					</View>
				</View>
				<View style={styles.recentTransactionContainer}>
					<RecentTransactionsContainer data={RecentTransactionData} />
					<View style={styles.addTransactionButtonContainer}>
						<AddTransactionButton
							onPress={GoToAddTransactionPageHandle}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	middleScreen: {
		flex: 1,
	},
	recentTransactionContainer: {
		flex: 1,
	},
	pieChartContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	addTransactionButtonContainer: {
		position: "absolute",
		bottom: 0,
		right: 0,
		padding: "1%",
	},
	remainingBudgetContainer: {
		position: "absolute",
	},
	remainingBudgetText: {
		textAlign: "center",
		fontSize: 24,
	},
});

export default HomeScreen;
