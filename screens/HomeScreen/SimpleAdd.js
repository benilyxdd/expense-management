import React, { useEffect } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { simpleInputChange, resetInput } from "../../store/actions/Transactions";

const SimpleAdd = () => {
	const simpleInput = useSelector((state) => state.Transactions.simpleInput);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(resetInput());
    }, [])

	return (
		<View>
			<TextInput
				label="transaction"
				value={simpleInput}
				onChangeText={(input) => dispatch(simpleInputChange(input))}
				placeholder="{ amount / description }"
			/>
		</View>
	);
};

export default SimpleAdd;
