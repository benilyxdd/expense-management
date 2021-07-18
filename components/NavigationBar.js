import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import NagivationBarButton from "./NavigationBarButton";

const NagivationBar = (props) => {
	return (
		<SafeAreaView style={styles.navigationBar}>
			<NagivationBarButton
				title="hi"
				icon="camera"
				onPress={() => console.log("pressed")}
			/>
			<NagivationBarButton
				title="hi"
				icon="camera"
				onPress={() => console.log("pressed")}
			/>
			<NagivationBarButton
				title="hi"
				icon="camera"
				onPress={() => console.log("pressed")}
			/>
			<NagivationBarButton
				title="hi"
				icon="camera"
				onPress={() => console.log("pressed")}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	navigationBar: {
		height: "10%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
});

export default NagivationBar;
