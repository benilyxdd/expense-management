import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/TabScreen/SettingsScreen";
import Categories from "../screens/SettingsScreen/Categories";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen name="Categories" component={Categories} />
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
