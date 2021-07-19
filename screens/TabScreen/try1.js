import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderText from "../../components/HeaderText";

const Try = () => {
	return (
		<View style={styles.screen}>
			<HeaderText title="try1" />
			<Text>YOjlkdsajlkdjaslkdjaskldjsd</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default Try;
