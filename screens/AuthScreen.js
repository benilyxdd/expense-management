import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import {
	GoogleSigninButton,
	GoogleSignin,
	statusCodes,
} from "@react-native-google-signin/google-signin";

import { simpleLogIn, googleLogIn } from "../store/actions/Auth";

GoogleSignin.configure();
logIn = async () => {
	try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		return userInfo;
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			console.log("sign in cancelled");
		} else if (error.code === statusCodes.IN_PROGRESS) {
			console.log("it is already in process");
		} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			console.log("play service not available");
		} else {
			console.log("can't");
		}
		return undefined;
	}
};

const AuthScreen = (props) => {
	const dispatch = useDispatch();
	const googleLogInHandler = async () => {
		const user = await logIn();
		if (user === undefined) {
			return;
		}
		dispatch(googleLogIn(user));
	};
	const loginHandler = () => {
		dispatch(simpleLogIn());
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
