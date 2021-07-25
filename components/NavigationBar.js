import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreenNavigator from "../navigation/HomeScreenNavigator";
import AccountOverallScreenNavigator from "../navigation/AccountOverallScreenNavigator";
import SettingsScreenNavigator from "../navigation/SettingsScreenNavigator";

const Tab = createBottomTabNavigator();

const NagivationBar = (props) => {
	return (
		<NavigationContainer>
			<Tab.Navigator tabBarOptions={{ tabStyle: styles.navigationBar }} initialRouteName="Home">
				<Tab.Screen
					name="Accounts"
					component={AccountOverallScreenNavigator}
					options={{
						tabBarLabel: "Accounts",
						tabBarIcon: ({ color, size }) => {
							return (
								<MaterialCommunityIcons
									name="share"
									size={size}
									color={color}
								/>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Home"
					component={HomeScreenNavigator}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ color, size }) => {
							return (
								<MaterialCommunityIcons
									name="home"
									size={size}
									color={color}
								/>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={SettingsScreenNavigator}
					options={{
						tabBarLabel: "Settings",
						tabBarIcon: ({ color, size }) => {
							return (
								<MaterialCommunityIcons
									name="cog"
									size={size}
									color={color}
								/>
							);
						},
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	navigationBar: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default NagivationBar;
