import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import SettingStackData from "../data/SettingStackData";

const SettingStack = createStackNavigator();

const SettingScreenNavigator = () => {
	return (
		<SettingStack.Navigator>
			{SettingStackData.map((screen) => {
				return (
					<SettingStack.Screen
						name={screen.name}
						component={screen.component}
					/>
				);
			})}
		</SettingStack.Navigator>
	);
};

export default SettingScreenNavigator;
