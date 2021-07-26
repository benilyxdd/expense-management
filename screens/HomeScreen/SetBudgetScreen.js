import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector } from "react-redux";

const SetBudgetScreen = () => {
	const monthlyBudget = useSelector(
		(state) => state.Auth.userData.basicInfo.monthlyBudget
	);
	const [enteredBudget, setEnteredBudget] = useState(
		monthlyBudget.toString()
	);

	const budgetChangeHandler = (input) => {
		const filteredInput = input.replace(/[^0-9\.]/g, "");
		if (
			filteredInput === "" ||
			(filteredInput.slice(-1) === "." &&
				filteredInput.indexOf(".") === filteredInput.length - 1)
		) {
			setEnteredBudget(filteredInput);
		} else {
			setEnteredBudget(parseFloat(filteredInput).toString());
		}
	};

	return (
		<View>
			<TextInput
				label="Budget"
				value={enteredBudget}
				onChangeText={budgetChangeHandler}
			/>
		</View>
	);
};

export default SetBudgetScreen;
