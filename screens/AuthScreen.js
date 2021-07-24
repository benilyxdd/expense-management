import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import {simpleLogIn} from '../store/actions/Auth.js'

const AuthScreen = (props) => {
	const dispatch = useDispatch();
	const loginHandler = () => {
		dispatch(simpleLogIn());
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is auth screen</Text>
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
	text: {
		fontFamily: "Caveat-Bold",
		fontSize: 35,
	},
});

export default AuthScreen;
