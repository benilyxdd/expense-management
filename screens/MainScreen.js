import React from "react";
import { StyleSheet, View } from "react-native";

import { HeaderTitle } from "react-navigation-stack";

const MainScreen = (props) => {
	return (
		<View>
			<HeaderTitle title="Title here" />
			<Text>This is Main Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default MainScreen;
