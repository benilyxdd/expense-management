import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import AddTransactionScreen from "../screens/HomeScreen/AddTransactionScreen";
import HomeScreen from "../screens/TabScreen/HomeScreen";
import SetBudgetScreen from "../screens/HomeScreen/SetBudgetScreen";

import { addTransaction } from "../store/actions/Transactions";
import { setMonthlyBudget } from '../store/actions/Auth';

const HomeStack = createStackNavigator();

const HomeScreenNavigator = (props) => {
	const dispatch = useDispatch();

	const detailInput = useSelector((state) => state.Transactions.detailInput);
	const uid = useSelector((state) => state.Auth.uid);
	const userBasicInfo = useSelector((state) => state.Auth.userData.basicInfo);
	const setMonthlyBudgetAmount =  useSelector(state => state.AppData.setMonthlyBudgetAmount)

	const AddTransactionFinishButton = () => {
		return (
			<IconButton
				icon="check"
				color="red"
				onPress={() => {
					dispatch(addTransaction(detailInput, uid, userBasicInfo));
					props.navigation.goBack();
				}}
			/>
		);
	};

	const setBudgetFinishButton = () => {
		return (
			<IconButton
				icon="check"
				color="red"
				onPress={() => {
					dispatch(setMonthlyBudget(setMonthlyBudgetAmount, uid));
					props.navigation.goBack();
				}}
			/>
		);
	};

	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen
				name="Add Transaction"
				component={AddTransactionScreen}
				options={{
					headerRight: AddTransactionFinishButton,
				}}
			/>
			<HomeStack.Screen
				name="Set Budget"
				component={SetBudgetScreen}
				options={{
					headerRight: setBudgetFinishButton,
				}}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeScreenNavigator;
