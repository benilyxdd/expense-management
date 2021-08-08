import React, { useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
	detailAmountChange,
	detailDescriptionChange,
	detailDateChange,
	detailCategoryChange,
	resetInput,
} from "../../store/actions/Transactions";

const DetailAdd = (props) => {
	const detailInput = useSelector((state) => state.Transactions.detailInput);
	const dispatch = useDispatch();
	const add = props.type === "Income" ? 1 : -1;

	useEffect(() => {
		dispatch(resetInput());
	}, []);

	const amountChangeHandler = (input) => {
		const filteredInput = input.replace(/[^0-9\.]/g, "");
		if (
			filteredInput === "" ||
			(filteredInput.slice(-1) === "." &&
				filteredInput.indexOf(".") === filteredInput.length - 1)
		) {
			dispatch(detailAmountChange(filteredInput));
		} else {
			dispatch(
				detailAmountChange((parseFloat(filteredInput) * add).toString())
			);
		}
	};

	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				<Text style={styles.text}>Date</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						value={detailInput.date}
						onChangeText={(input) =>
							dispatch(detailDateChange(input))
						}
					/>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Amount</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						value={detailInput.amount}
						onChangeText={amountChangeHandler}
						keyboardType="numeric"
					/>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Category</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						value={detailInput.category}
						onChangeText={(input) =>
							dispatch(detailCategoryChange(input))
						}
						multiline={true}
					/>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Details</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						value={detailInput.description}
						onChangeText={(input) =>
							dispatch(detailDescriptionChange(input))
						}
						multiline={true}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingVertical: "4%",
	},
	container: {
		width: "100%",
		flexDirection: "row",
		marginHorizontal: "2%",
		alignItems: "baseline",
		justifyContent: "center",
	},
	inputContainer: {
		flex: 1,
		marginHorizontal: "5%",
		paddingVertical: "2%",
		marginVertical: "2%",
	},
	input: {
		borderBottomColor: "red",
		borderBottomWidth: 0.5,
		padding: "2%",
	},
	text: {
		fontSize: 15,
		width: "20%",
	},
});

export default DetailAdd;
