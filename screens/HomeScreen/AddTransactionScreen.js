import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";

// import SimpleAdd from "./SimpleAdd";
import IncomeTab from "./IncomeTab";
import ExpensesTab from "./ExpenseTab";

const Tab = createMaterialTopTabNavigator();

const AddTransactionScreen = (props) => {
	const isLoading = useSelector((state) => state.Transactions.isLoading);

	return (
		<View style={styles.screen}>
			{isLoading && (
				<ActivityIndicator
					size="large"
					style={styles.loadingIndicator}
				/>
			)}
			<View style={styles.navigatorContainer}>
				<Tab.Navigator>
					{/* <Tab.Screen name="simple" component={SimpleAdd} /> */}
					<Tab.Screen name="Expense" component={ExpensesTab} />
					<Tab.Screen name="Income" component={IncomeTab} />
				</Tab.Navigator>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	navigatorContainer: {
		width: "90%",
		height: "50%",
		overflow: "hidden",
		borderRadius: 15,
		borderWidth: 2,
		margin: "5%",
	},
	loadingIndicator: {
		position: "absolute",
		right: "50%",
		left: "50%",
		top: "50%",
		bottom: "50%",
		zIndex: 1,
	},
});

export default AddTransactionScreen;
