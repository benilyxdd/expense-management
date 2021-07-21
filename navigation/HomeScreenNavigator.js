import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeStackData from "../data/stack/HomeStackData";

const HomeStack = createStackNavigator();

const HomeScreenNavigator = () => {
	return (
		<HomeStack.Navigator>
			{HomeStackData.map((screen, index) => {
				return (
					<HomeStack.Screen
						key={index}
						name={screen.name}
						component={screen.component}
					/>
				);
			})}
		</HomeStack.Navigator>
	);
};

export default HomeScreenNavigator;
