import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import AppSelectionScreen from "./screens/AppSelectionScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<AppSelectionScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
