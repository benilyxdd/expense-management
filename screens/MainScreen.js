import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native-paper";

import NagivationBar from "../components/NavigationBar";
import AuthScreen from "../screens/AuthScreen";
import { fetchUserData } from "../store/actions/Auth";

const MainScreen = (props) => {
	const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
	const isLoading = useSelector((state) => state.Auth.isLoading);
	const isLoading2 = useSelector((state) => state.Transactions.isLoading);
	const uid = useSelector((state) => state.Auth.uid);

	const dispatch = useDispatch();

	useMemo(() => {
		if (isLoggedIn) {
			dispatch(fetchUserData(uid));
		}
	}, [uid, isLoading2]);

	if (!isLoggedIn) {
		return (
			<View style={styles.authScreenContainer}>
				<AuthScreen />
				{isLoading && (
					<ActivityIndicator
						size="large"
						style={styles.loadingIndicator}
					/>
				)}
			</View>
		);
	}

	return (
		<View style={styles.screen}>
			<NagivationBar />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		width: "100%",
		height: "100%",
	},
	loadingIndicator: {
		position: "absolute",
		right: "50%",
		left: "50%",
		top: "50%",
		bottom: "50%",
	},
	authScreenContainer: {
		flex: 1,
	},
});

export default MainScreen;
