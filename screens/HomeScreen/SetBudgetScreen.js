import React, { useEffect } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { setMonthlyBudgetChange } from "../../store/actions/AppData";

const SetBudgetScreen = () => {
	const dispatch = useDispatch();
	const monthlyBudgetAmount = useSelector(
		(state) => state.Auth.userData.basicInfo.monthlyBudget
	);
	const setMonthlyBudgetAmount = useSelector(
		(state) => state.AppData.setMonthlyBudgetAmount
	);

	useEffect(() => {
		dispatch(setMonthlyBudgetChange(monthlyBudgetAmount.toString()));
	}, []);

	const budgetChangeHandler = (input) => {
		const filteredInput = input.replace(/[^0-9\.]/g, "");
		if (
			filteredInput === "" ||
			(filteredInput.slice(-1) === "." &&
				filteredInput.indexOf(".") === filteredInput.length - 1)
		) {
			dispatch(setMonthlyBudgetChange(filteredInput));
		} else {
			dispatch(
				setMonthlyBudgetChange(parseFloat(filteredInput).toString())
			);
			``;
		}
	};

	return (
		<View>
			<TextInput
				label="Budget"
				value={setMonthlyBudgetAmount}
				onChangeText={budgetChangeHandler}
			/>
		</View>
	);
};

export default SetBudgetScreen;
