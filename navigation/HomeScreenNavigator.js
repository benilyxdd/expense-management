import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddTransactionScreen from "../screens/HomeScreen/AddTransactionScreen";
import HomeScreen from "../screens/TabScreen/HomeScreen";

const HomeStack = createStackNavigator();

const HomeScreenNavigator = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen
				name="Add Transaction"
				component={AddTransactionScreen}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeScreenNavigator;
