import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import HomeStackData from "../data/HomeStackData";

const HomeStack = createStackNavigator();

const HomeScreenNavigator = () => {
	return (
		<HomeStack.Navigator>
			{HomeStackData.map((screen) => {
				return (
					<HomeStack.Screen
						name={screen.name}
						component={screen.component}
					/>
				);
			})}
		</HomeStack.Navigator>
	);
};

export default HomeScreenNavigator;
