import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Categories = () => {
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
