import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const NagivationBar = (props) => {
	return (
		<NavigationContainer>
			<Tab.Navigator tabBarOptions={{ tabStyle: styles.navigationBar }}>
				{props.allScreens.map((screen, index) => {
					return (
						<Tab.Screen
							name={screen.name}
							component={screen.component}
							key={index}
						/>
					);
				})}
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
		backgroundColor: "white",
	},
});

export default NagivationBar;
