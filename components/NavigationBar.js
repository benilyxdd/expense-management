import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const xd = <MaterialCommunityIcons name="" />;

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
							options={{
								tabBarLabel: screen.name,
								tabBarIcon: ({ color, size }) => {
									return (
										<MaterialCommunityIcons
											name={screen.icon.name}
											size={size}
											color={color}
										/>
									);
								},
							}}
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
	},
});

export default NagivationBar;
