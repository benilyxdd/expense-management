import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import AccountOverallStackData from "../data/AccountOverallStackData";

const AccountOverAllStack = createStackNavigator();

const AccountOverAllScreenNavigator = () => {
	return (
		<AccountOverAllStack.Navigator>
			{AccountOverallStackData.map((screen) => {
				return (
					<AccountOverAllStack.Screen
						name={screen.name}
						component={screen.component}
					/>
				);
			})}
		</AccountOverAllStack.Navigator>
	);
};

export default AccountOverAllScreenNavigator;
