import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import SettingsScreen from "../screens/TabScreen/SettingsScreen";
import Categories from "../screens/SettingsScreen/Categories";
import RecurringTransactions from "../screens/SettingsScreen/RecurringTransactions";
import MainCurrency from "../screens/SettingsScreen/MainCurrency";
import SubCurrency from "../screens/SettingsScreen/SubCurrency";
import Theme from "../screens/SettingsScreen/Theme";
import AddCategory from "../screens/SettingsScreen/AddCategory";

import { addCategory, resetInputCategory } from "../store/actions/Category";
import { fetchUserData } from "../store/actions/Auth";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = (props) => {
	const dispatch = useDispatch();
	const inputCategory = useSelector((state) => state.Category.inputCategory);
	const categoriesList = useSelector(
		(state) => state.Auth.userData.basicInfo.categories
	);
	const uid = useSelector((state) => state.Auth.uid);

	const addCategoryButton = () => {
		return (
			<IconButton
				icon="plus"
				color="green"
				size={30}
				onPress={() => {
					dispatch(resetInputCategory());
					props.navigation.navigate("Add Category");
				}}
			/>
		);
	};

	const confirmAddCategoryButton = () => {
		return (
			<IconButton
				icon="check"
				color="green"
				size={30}
				onPress={() => {
					dispatch(
						addCategory(
							uid,
							categoriesList ? categoriesList : [],
							inputCategory
						)
					);
					dispatch(fetchUserData(uid));
					props.navigation.navigate("Categories");
				}}
			/>
		);
	};

	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen
				name="Categories"
				component={Categories}
				options={{ headerRight: addCategoryButton }}
			/>
			<SettingsStack.Screen
				name="Recurring Transactions"
				component={RecurringTransactions}
			/>
			<SettingsStack.Screen
				name="Main Currency"
				component={MainCurrency}
			/>
			<SettingsStack.Screen name="Sub Currency" component={SubCurrency} />
			<SettingsStack.Screen name="Theme" component={Theme} />
			<SettingsStack.Screen
				name="Add Category"
				component={AddCategory}
				options={{ headerRight: confirmAddCategoryButton }}
			/>
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
