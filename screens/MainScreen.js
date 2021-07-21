import React from "react";
import { StyleSheet, View } from "react-native";

import NagivationBar from "../components/NavigationBar";
import allScreensTab from "../data/AllTabScreenData";

const MainScreen = (props) => {
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
