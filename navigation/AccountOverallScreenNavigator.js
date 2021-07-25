import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountOverAllScreen from "../screens/TabScreen/AccountOverallScreen";

const AccountOverAllStack = createStackNavigator();

const AccountOverAllScreenNavigator = () => {
	return (
		<AccountOverAllStack.Navigator>
			<AccountOverAllStack.Screen
				name="Account Overall"
				component={AccountOverAllScreen}
			/>
		</AccountOverAllStack.Navigator>
	);
};

export default AccountOverAllScreenNavigator;
