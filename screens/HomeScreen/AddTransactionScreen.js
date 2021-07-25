import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import SimpleAdd from "./SimpleAdd";
import DetailAdd from "./DetailAdd";

const Tab = createMaterialTopTabNavigator();

const AddTransactionScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.navigatorContainer}>
				<Tab.Navigator>
					{/* <Tab.Screen name="simple" component={SimpleAdd} /> */}
					<Tab.Screen name="Income" component={DetailAdd} />
					<Tab.Screen name="Expense" component={DetailAdd} />
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
});

export default AddTransactionScreen;
