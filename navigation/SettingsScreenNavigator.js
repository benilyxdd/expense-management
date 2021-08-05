import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/TabScreen/SettingsScreen";
import Categories from "../screens/SettingsScreen/Categories";
import RecurringTransactions from "../screens/SettingsScreen/RecurringTransactions";
import MainCurrency from "../screens/SettingsScreen/MainCurrency";
import SubCurrency from "../screens/SettingsScreen/SubCurrency";
import Theme from "../screens/SettingsScreen/Theme";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen name="Categories" component={Categories} />
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
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
