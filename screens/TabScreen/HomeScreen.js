import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Pie from "../../components/Pie";
import PieChartData from "../../data/PieChartData";
import RecentTransactionsContainer from "../../components/RecentTransactionsContainer";
import RecentTransactionData from "../../data/RecentTransactionData";
import AddTransactionButton from "../../components/AddTransactionButton";

import { fetchAllTransactions } from "../../store/actions/Transactions";

const HomeScreen = (props) => {
	const dispatch = useDispatch();
	const monthlyBudget = useSelector(
		(state) => state.Auth.userData.basicInfo.monthlyBudget
	);
	const uid = useSelector((state) => state.Auth.uid);
	const allTransactionsData = useSelector(
		(state) => state.Transactions.allTransactions
	).map((item) => {
		return { ...item, "amount": parseFloat(item["amount"]) };
	});

	const GoToAddTransactionPageHandler = () => {
		props.navigation.navigate("Add Transaction");
	};

	const GoToSetBudgetPageHandler = () => {
		props.navigation.navigate("Set Budget");
	};

	useEffect(() => {
		dispatch(fetchAllTransactions(uid));
	}, []);

	return (
		<View style={styles.screen}>
			<View style={styles.middleScreen}>
				<View style={styles.pieChartContainer}>
					<Pie data={PieChartData} />
					<TouchableWithoutFeedback
						onPress={GoToSetBudgetPageHandler}
					>
						<View style={styles.remainingBudgetContainer}>
							<Text style={styles.remainingBudgetText}>
								Remaining
							</Text>
							<Text style={styles.remainingBudgetText}>
								Budget:{" "}
							</Text>
							<Text style={styles.remainingBudgetText}>
								${monthlyBudget}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.recentTransactionContainer}>
					<RecentTransactionsContainer data={RecentTransactionData} />
					<View style={styles.addTransactionButtonContainer}>
						<AddTransactionButton
							onPress={GoToAddTransactionPageHandler}
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
