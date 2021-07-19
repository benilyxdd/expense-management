import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";

const SettingScreen = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="Settings" />
			<View>
				<Text>This is a setting screen</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default SettingScreen;
