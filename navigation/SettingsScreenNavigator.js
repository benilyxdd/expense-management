import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/TabScreen/SettingsScreen";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
