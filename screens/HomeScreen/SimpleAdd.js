import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { simpleInputChange } from "../../store/actions/Transactions";

const SimpleAdd = () => {
	const simpleInput = useSelector((state) => state.Transactions.simpleInput);

	const dispatch = useDispatch();

	return (
		<View>
			<TextInput
				label="transaction"
				value={simpleInput}
				onChangeText={(input) => dispatch(simpleInputChange(input))}
			/>
		</View>
	);
};

export default SimpleAdd;
