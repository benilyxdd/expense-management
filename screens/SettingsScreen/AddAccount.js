import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { inputAccountChange } from "../../store/actions/Account";

const AddAccount = () => {
	const dispatch = useDispatch();
	const inputAccount = useSelector((state) => state.Account.inputAccount);

	return (
		<View>
			<TextInput
				value={inputAccount}
				onChangeText={(input) => dispatch(inputAccountChange(input))}
				autoFocus={true}
			/>
		</View>
	);
};

export default AddAccount;
