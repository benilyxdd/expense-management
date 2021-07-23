import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

import { simpleLogin, googleLogin } from "../store/actions/Auth";

const AuthScreen = (props) => {
	const dispatch = useDispatch();
	const googleLogInHandler = () => {
		dispatch(googleLogin());
	};
	const loginHandler = () => {
		dispatch(simpleLogin());
	};
	
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is auth screen</Text>
			<Button title="Hello" onPress={loginHandler} />
			<GoogleSigninButton onPress={googleLogInHandler} />
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
