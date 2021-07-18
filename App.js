import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import MainScreen from "./screens/MainScreen";

export default function App() {
	return (
		<MainScreen />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'grey'
	},
});
