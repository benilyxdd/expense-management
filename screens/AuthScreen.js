import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Button } from "react-native-paper";

import {
	simpleLogIn,
	emailChange,
	passwordChange,
	logIn,
	signUp,
} from "../store/actions/Auth.js";

const AuthScreen = (props) => {
	const userEmail = useSelector((state) => state.Auth.userEmail);
	const userPassword = useSelector((state) => state.Auth.userPassword);

	const dispatch = useDispatch();
	const simpleLoginHandler = () => {
		dispatch(simpleLogIn());
	};

	const logInHandler = () => {
		dispatch(logIn());
	};

	const signUpHandler = () => {
		dispatch(signUp());
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is auth screen</Text>
			<Button onPress={simpleLoginHandler}>Hello</Button>
			<View style={styles.inputContainer}>
				<TextInput
					label="email"
					value={userEmail}
					onChangeText={(email) => dispatch(emailChange(email))}
					autoCapitalize="none"
					autoCorrect={false}
					autoFocus={true}
				/>
				<TextInput
					label="password"
					value={userPassword}
					onChangeText={(password) =>
						dispatch(passwordChange(password))
					}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry={true}
				/>
				<View style={styles.submitButtonContainer}>
					<Button onPress={logInHandler}>Log In</Button>
					<Button onPress={signUpHandler}>Sign Up</Button>
				</View>
			</View>
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
	inputContainer: {
		width: "80%",
		borderColor: "black",
		borderRadius: 20,
		overflow: "hidden",
	},
	submitButtonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		margin: "5%",
	},
});

export default AuthScreen;
