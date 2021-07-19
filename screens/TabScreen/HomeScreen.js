import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";
import Pie from "../../components/Pie";
import PieChartData from "../../data/PieChartData";

const HomeScreen = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="Home" />
			<View style={styles.middleScreen}>
				<View style={styles.pieChartContainer}>
					<Pie data={PieChartData} />
				</View>
				<View style={styles.recentTransactionContainer}>
					<Text>we got the whole screen</Text>
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
		backgroundColor: "brown",
	},
	pieChartContainer: {
		height: "55%",
		width: "100%",
		backgroundColor: "grey",
	},
});

export default HomeScreen;
