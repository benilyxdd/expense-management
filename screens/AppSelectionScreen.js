import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomContainer from "../components/CustomContainer";
import HeaderText from "../components/HeaderText";

const AppSelectionScreen = (props) => {
	return (
		<View style={styles.main}>
			<HeaderText title="Select Your App" />
			<CustomContainer style={{ ...styles.main, ...styles.container }}>
				<Text>hi</Text>
			</CustomContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		width: "90%",
		height: "95%",
	},
	container: {
		flex: 10,
	},
	textContainer: {
		flex: 1,
	},
});

export default AppSelectionScreen;
