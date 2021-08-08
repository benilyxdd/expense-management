import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const Categories = () => {
	const dispatch = useDispatch();
	const categoriesList = useSelector(
		(state) => state.Auth.userData.basicInfo.categories
	);

	return (
		<View>
			{categoriesList &&
				categoriesList.map((item, index) => {
					return <Text key={index}>{item}</Text>;
				})}
		</View>
	);
};

export default Categories;
