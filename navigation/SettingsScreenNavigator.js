import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";

import SettingsScreen from "../screens/TabScreen/SettingsScreen";
import Categories from "../screens/SettingsScreen/Categories";
import RecurringTransactions from "../screens/SettingsScreen/RecurringTransactions";
import MainCurrency from "../screens/SettingsScreen/MainCurrency";
import SubCurrency from "../screens/SettingsScreen/SubCurrency";
import Theme from "../screens/SettingsScreen/Theme";
import AddCategory from "../screens/SettingsScreen/AddCategory";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = (props) => {
	const addCategoryButton = () => {
		return (
			<IconButton
				icon="plus"
				color="green"
				size={30}
				onPress={() => props.navigation.navigate("Add Category")}
			/>
		);
	};

	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen
				name="Categories"
				component={Categories}
				options={{ headerRight: addCategoryButton }}
			/>
			<SettingsStack.Screen
				name="Recurring Transactions"
				component={RecurringTransactions}
			/>
			<SettingsStack.Screen
				name="Main Currency"
				component={MainCurrency}
			/>
			<SettingsStack.Screen name="Sub Currency" component={SubCurrency} />
			<SettingsStack.Screen name="Theme" component={Theme} />
			<SettingsStack.Screen name="Add Category" component={AddCategory} />
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
