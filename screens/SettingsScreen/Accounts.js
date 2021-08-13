import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserData } from "../../store/actions/Auth";
import { deleteAccount } from "../../store/actions/Account";
import { fetchAllTransactions } from "../../store/actions/Transactions";

const Categories = () => {
	const dispatch = useDispatch();
	const accountsList = useSelector(
		(state) => state.Auth.userData.basicInfo.accounts
	);
	const uid = useSelector((state) => state.Auth.uid);

	const deleteAccountAndUpdate = (account) => {
		return async (dispatch) => {
			await dispatch(deleteAccount(uid, account, accountsList));
			await dispatch(fetchUserData(uid));
			await dispatch(fetchAllTransactions(uid));
		};
	};

	return (
		<ScrollView style={styles.screen}>
			{accountsList &&
				accountsList.map((item, index) => {
					return (
						<View key={index} style={styles.itemContainer}>
							<View style={styles.textContainer}>
								<Text style={styles.text}>{item}</Text>
							</View>
							<View style={styles.buttonContainer}>
								<Button
									icon="delete"
									color="red"
									onPress={() =>
										dispatch(deleteAccountAndUpdate(item))
									}
								>
									Delete
								</Button>
							</View>
						</View>
					);
				})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	itemContainer: {
		flexDirection: "row",
		alignItems: "baseline",
		marginHorizontal: "5%",
		margin: "3%",
		padding: "2%",
		borderRadius: 15,
		borderColor: "black",
		borderWidth: 1,
	},
	textContainer: {
		flex: 5,
		padding: "2%",
		height: "100%",
		width: "100%",
	},
	buttonContainer: {
		flex: 3,
	},
	text: {
		fontSize: 20,
	},
});

export default Categories;
