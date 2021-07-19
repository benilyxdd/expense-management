import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";
import Pie from "../../components/Pie";
import PieChartData from "../../data/PieChartData";
import DefaultListContainer from "../../components/DefaultListContainer";
import RecentTransactionData from "../../data/RecentTransactionData";
import AddTransactionButton from "../../components/AddTransactionButton";

const HomeScreen = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="Home" />
			<View style={styles.middleScreen}>
				<View style={styles.pieChartContainer}>
					<Pie data={PieChartData} />
				</View>
				<View style={styles.recentTransactionContainer}>
					<DefaultListContainer data={RecentTransactionData} />
					<View style={styles.addTransactionButtonContainer}>
						<AddTransactionButton />
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
		// backgroundColor: "brown",
	},
	pieChartContainer: {
		flex: 1,
		backgroundColor: "grey",
		alignItems: "center",
		justifyContent: "center",
	},
	addTransactionButtonContainer: {
		position: "absolute",
		bottom: 0,
		right: 0,
		padding: "1%",
	},
});

export default HomeScreen;
