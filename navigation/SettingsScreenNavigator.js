import React from "react";
import { Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import Accounts from "../screens/SettingsScreen/Accounts";
import AddAccount from "../screens/SettingsScreen/AddAccount";
import AddCategory from "../screens/SettingsScreen/AddCategory";
import Categories from "../screens/SettingsScreen/Categories";
import MainCurrency from "../screens/SettingsScreen/MainCurrency";
import RecurringTransactions from "../screens/SettingsScreen/RecurringTransactions";
import SettingsScreen from "../screens/TabScreen/SettingsScreen";
import SubCurrency from "../screens/SettingsScreen/SubCurrency";
import SubmitFeedback from "../screens/SettingsScreen/SubmitFeedback";
import Theme from "../screens/SettingsScreen/Theme";

import { addCategory, resetInputCategory } from "../store/actions/Category";
import { fetchUserData } from "../store/actions/Auth";
import { submitFeedback } from "../store/actions/Feedback";
import { addAccount, resetInputAccount } from "../store/actions/Account";

const SettingsStack = createStackNavigator();

const SettingScreenNavigator = (props) => {
	const dispatch = useDispatch();
	const uid = useSelector((state) => state.Auth.uid);

	// add account start
	const inputAccount = useSelector((state) => state.Account.inputAccount);
	const accountsList = useSelector(
		// all accounts of current users
		(state) => state.Auth.userData.basicInfo.accounts
	);

	const addAccountButton = () => {
		return (
			<IconButton
				icon="plus"
				color="green"
				size={30}
				onPress={() => {
					dispatch(resetInputAccount());
					props.navigation.navigate("Add Account");
				}}
			/>
		);
	};

	const addAndUpdateAccount = () => {
		return async (dispatch) => {
			await dispatch(
				addAccount(uid, accountsList ? accountsList : [], inputAccount)
			);
			await dispatch(fetchUserData(uid));
			props.navigation.navigate("AccountsList");
		};
	};

	const confirmAddAccountButton = () => {
		return (
			<IconButton
				icon="check"
				color="green"
				size={30}
				onPress={() => {
					if (!inputAccount) {
						Alert.alert("Error", "You cannot add empty account");
						return;
					}
					if (accountsList && accountsList.includes(inputAccount)) {
						Alert.alert("Error", "You cannot add an account twice");
						return;
					}
					dispatch(addAndUpdateAccount());
				}}
			/>
		);
	};
	// add account end

	// add category start
	const inputCategory = useSelector((state) => state.Category.inputCategory); // add category input
	const categoriesList = useSelector(
		// all categories of current user
		(state) => state.Auth.userData.basicInfo.categories
	);

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

	const addAndUpdateCategory = () => {
		return async (dispatch) => {
			await dispatch(
				addCategory(
					uid,
					categoriesList ? categoriesList : [],
					inputCategory
				)
			);
			await dispatch(fetchUserData(uid));
			props.navigation.navigate("Categories");
		};
	};

	const confirmAddCategoryButton = () => {
		return (
			<IconButton
				icon="check"
				color="green"
				size={30}
				onPress={() => {
					if (!inputCategory) {
						Alert.alert("Error", "You cannot add empty category");
						return;
					}
					if (
						categoriesList &&
						categoriesList.includes(inputCategory)
					) {
						Alert.alert("Error", "You cannot add a category twice");
						return;
					}
					dispatch(addAndUpdateCategory());
				}}
			/>
		);
	};
	// add category end

	// submit feedback start
	const inputDetail = useSelector((state) => state.Feedback.detail); // feedback detail
	const inputSubject = useSelector((state) => state.Feedback.subject); // feedback subject

	const submitFeedbackAndGoBack = () => {
		return async (dispatch) => {
			await dispatch(submitFeedback(uid, inputSubject, inputDetail));
			props.navigation.navigate("SettingsMain");
		};
	};

	const submitFeedbackButton = () => {
		return (
			<IconButton
				icon="check"
				color="green"
				size={30}
				onPress={() => {
					if (!uid) {
						Alert.alert(
							"Error",
							"You somehow log in without logging in"
						);
						return;
					}
					if (!inputDetail || !inputSubject) {
						Alert.alert("Error", "Input cannot be empty");
						return;
					}
					dispatch(submitFeedbackAndGoBack());
				}}
			/>
		);
	};
	// submit feedback end

	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen
				name="SettingsMain"
				component={SettingsScreen}
				options={{ title: "Settings" }}
			/>

			{/* transactions */}
			<SettingsStack.Screen
				name="AccountsList"
				component={Accounts}
				options={{ headerRight: addAccountButton, title: "Accounts" }}
			/>
			<SettingsStack.Screen
				name="Add Account"
				component={AddAccount}
				options={{ headerRight: confirmAddAccountButton }}
			/>
			<SettingsStack.Screen
				name="Categories"
				component={Categories}
				options={{ headerRight: addCategoryButton }}
			/>
			<SettingsStack.Screen
				name="Add Category"
				component={AddCategory}
				options={{ headerRight: confirmAddCategoryButton }}
			/>
			<SettingsStack.Screen
				name="Recurring Transactions"
				component={RecurringTransactions}
			/>

			{/* Settings */}
			<SettingsStack.Screen
				name="Main Currency"
				component={MainCurrency}
			/>
			<SettingsStack.Screen name="Sub Currency" component={SubCurrency} />
			<SettingsStack.Screen name="Theme" component={Theme} />

			{/* supports */}
			<SettingsStack.Screen
				name="Submit Feedback"
				component={SubmitFeedback}
				options={{ headerRight: submitFeedbackButton }}
			/>
		</SettingsStack.Navigator>
	);
};

export default SettingScreenNavigator;
