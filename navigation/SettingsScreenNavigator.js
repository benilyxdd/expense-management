import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/TabScreen/SettingsScreen";
import CategoriesScreen from "../screens/SettingsScreen/CategoriesScreen";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen
				name="CategoriesScreen"
				component={CategoriesScreen}
				options={{ title: "Categories" }}
			/>
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
