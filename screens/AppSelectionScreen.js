import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomContainer from "../components/CustomContainer";
import HeaderText from "../components/HeaderText";
import AppButton from "../components/AppButton";

const AppSelectionScreen = (props) => {
	return (
		<View style={styles.main}>
			<HeaderText title="Select Your App" />
			<CustomContainer style={styles.appContainer}>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
				<AppButton>hello</AppButton>
			</CustomContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		alignItems: "center",
		justifyContent: "center",
		width: '85%',
		height: '90%'
	},
	appContainer: {
		flex: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	textContainer: {
		flex: 1
	},
});

export default AppSelectionScreen;
