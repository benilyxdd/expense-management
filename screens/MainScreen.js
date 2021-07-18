import React from "react";
import { StyleSheet, View, Text } from "react-native";

import HeaderText from "../components/HeaderText";
import NagivationBar from "../components/NavigationBar";

import allScreensTab from "../screens/TabScreen/allScreen";

const MainScreen = (props) => {
	return (
		<View>
			<HeaderText title="Transaction" />
			<View style={styles.screen}>
				<NagivationBar allScreens={allScreensTab} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		width: "100%",
		height: "90%",
		backgroundColor: "white",
	},
});

export default MainScreen;
