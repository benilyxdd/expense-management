import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import AddTransactionScreen from "../screens/HomeScreen/AddTransactionScreen";
import HomeScreen from "../screens/TabScreen/HomeScreen";
import { addTransaction } from "../store/actions/Transactions";

const HomeStack = createStackNavigator();

const HomeScreenNavigator = () => {
	const dispatch = useDispatch();

	const detailInput = useSelector((state) => state.Transactions.detailInput);
	const uid = useSelector((state) => state.Auth.uid);
	const userTotalExpenses = useSelector((state) => state.AppData.userData.basicInfo.expenses);

	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen
				name="Add Transaction"
				component={AddTransactionScreen}
				options={{
					headerRight: () => {
						return (
							<IconButton
								icon="check"
								color="red"
								onPress={() =>
									dispatch(
										addTransaction(
											detailInput,
											uid,
											userTotalExpenses
										)
									)
								}
							/>
						);
					},
				}}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeScreenNavigator;
