import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { inputCategoryChange } from "../../store/actions/Category";

const AddCategory = () => {
	const dispatch = useDispatch();
	const inputCategory = useSelector((state) => state.Category.inputCategory);

	return (
		<View>
			<TextInput
				value={inputCategory}
				onChangeText={(input) => dispatch(inputCategoryChange(input))}
			/>
		</View>
	);
};

export default AddCategory;
