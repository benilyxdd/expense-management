import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SimpleAdd from "./SimpleAdd";

const Tab = createMaterialTopTabNavigator();

const AddTransactionScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Tab.Navigator>
				<Tab.Screen name="simple" component={SimpleAdd} />
			</Tab.Navigator>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default AddTransactionScreen;
