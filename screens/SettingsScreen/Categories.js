import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import {
	inputCategoryChange,
	resetInputCategory,
} from "../../store/actions/Category";

const Categories = () => {
	const dispatch = useDispatch();
	const inputCategory = useSelector((state) => state.Category.inputCategory);
	const categoriesList = useSelector(
		(state) => state.Auth.userData.basicInfo.categories
	);

	useEffect(() => {
		dispatch(resetInputCategory());
	}, []);

	return (
		<View>
			<TextInput
				value={inputCategory}
				onChangeText={(input) => dispatch(inputCategoryChange(input))}
			/>
			{categoriesList &&
				categoriesList.map((item, index) => {
					return <Text key={index}>{item}</Text>;
				})}
		</View>
	);
};

export default Categories;
