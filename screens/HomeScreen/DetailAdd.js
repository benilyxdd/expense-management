import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import {
    detailAmountChange,
	detailDescriptionChange,
	detailDateChange,
	resetInput,
} from "../../store/actions/Transactions";

const DetailAdd = () => {
	const detailInput = useSelector((state) => state.Transactions.detailInput);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetInput());
	}, []);

	return (
		<View style={styles.screen}>
			<TextInput
				label="date"
				value={detailInput.date}
                onChangeText={(input) => dispatch(detailDateChange(input))}
			/>
			<TextInput
				label="amount"
				value={detailInput.amount}
                onChangeText={(input) => dispatch(detailAmountChange(input))}
                keyboardType="numeric"
			/>
			<TextInput
				label="description"
				value={detailInput.description}
                onChangeText={(input) => dispatch(detailDescriptionChange(input))}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default DetailAdd;
