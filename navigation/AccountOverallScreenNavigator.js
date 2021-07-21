import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountOverallStackData from "../data/stack/AccountOverallStackData";

const AccountOverAllStack = createStackNavigator();

const AccountOverAllScreenNavigator = () => {
	return (
		<AccountOverAllStack.Navigator>
			{AccountOverallStackData.map((screen, index) => {
				return (
					<AccountOverAllStack.Screen
						key={index}
						name={screen.name}
						component={screen.component}
					/>
				);
			})}
		</AccountOverAllStack.Navigator>
	);
};

export default AccountOverAllScreenNavigator;
