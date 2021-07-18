import React from "react";
import { StyleSheet, View } from "react-native";

import HeaderText from "../components/HeaderText";
import NagivationBar from "../components/NavigationBar";

const MainScreen = (props) => {
	return (
		<View>
			<HeaderText title="Transaction" />
			<View style={styles.screen}></View>
			<NagivationBar />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		width: "100%",
		height: "80%",
		backgroundColor: "white",
	},
});

export default MainScreen;
