import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";
import Pie from "../../components/Pie";

const HomeScreen = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="Home" />
			<View style={styles.middleScreen}>
				<View style={styles.pieChartContainer}>
					<Pie
						data={[
							{ x: "Cats", y: 35 },
							{ x: "Dogs", y: 40 },
							{ x: "Birds", y: 55 },
						]}
					/>
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
		backgroundColor: 'brown'
	},
	pieChartContainer: {
		height: "55%",
		width: "100%",
		backgroundColor: "grey",
	},
});

export default HomeScreen;
