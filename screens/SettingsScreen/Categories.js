import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserData } from "../../store/actions/Auth";
import { deleteCategory } from "../../store/actions/Category";

const Categories = () => {
	const dispatch = useDispatch();
	const categoriesList = useSelector(
		(state) => state.Auth.userData.basicInfo.categories
	);
	const uid = useSelector((state) => state.Auth.uid);

	const deleteCategoryAndUpdate = (category) => {
		return async (dispatch) => {
			await dispatch(deleteCategory(uid, category, categoriesList));
			await dispatch(fetchUserData(uid));
		};
	};

	return (
		<ScrollView style={styles.screen}>
			{categoriesList &&
				categoriesList.map((item, index) => {
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
										dispatch(deleteCategoryAndUpdate(item))
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
