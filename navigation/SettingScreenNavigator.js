import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingStackData from "../data/SettingStackData";

const SettingStack = createStackNavigator();

const SettingScreenNavigator = () => {
	return (
		<SettingStack.Navigator>
			{SettingStackData.map((screen, index) => {
				return (
					<SettingStack.Screen
						key={index}
						name={screen.name}
						component={screen.component}
					/>
				);
			})}
		</SettingStack.Navigator>
	);
};

export default SettingScreenNavigator;
