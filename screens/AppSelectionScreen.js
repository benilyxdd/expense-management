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
				<AppButton address='https://github.com/benilyxdd/myApp/blob/e0153dd503f2b9280d9e7cebc1ab3b0e53d81b7a/assets/images/adaptive-icon.png?raw=true' />
			</CustomContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		alignItems: "center",
		justifyContent: "center",
		width: '85%',
		height: '90%',
		backgroundColor: 'white'
	},
	appContainer: {
		flex: 10,
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginHorizontal: 15,
	},
	textContainer: {
		flex: 1
	},
});

export default AppSelectionScreen;
