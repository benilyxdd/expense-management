import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsStackData from "../data/stack/SettingsStackData";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = () => {
	return (
		<SettingsStack.Navigator>
			{SettingsStackData.map((screen, index) => {
				return (
					<SettingsStack.Screen
						key={index}
						name={screen.name}
						component={screen.component}
					/>
				);
			})}
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
