import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import NagivationBar from "../components/NavigationBar";
import allScreensTab from "../data/AllTabScreenData";
import AuthScreen from "../screens/AuthScreen";

const MainScreen = (props) => {
	const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);

	if (!isLoggedIn) {
		return <AuthScreen />;
	}

	return (
		<View style={styles.screen}>
			<NagivationBar allScreens={allScreensTab} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		width: "100%",
		height: "100%",
	},
});

export default MainScreen;
