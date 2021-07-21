import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import { simpleLogin } from "../store/actions/Auth";

const AuthScreen = (props) => {
	const dispatch = useDispatch();
	const loginHandler = () => {
		dispatch(simpleLogin());
	};

	return (
		<View style={styles.screen}>
			<Text>This is auth screen</Text>
			<Button title="Hello" onPress={loginHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default AuthScreen;
