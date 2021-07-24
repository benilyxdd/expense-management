import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { List, Divider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import TouchableListItem from "../../components/TouchableListItem";
import { googleLogOut } from "../../store/actions/Auth";

GoogleSignin.configure();
logOut = async () => {
	try {
		await GoogleSignin.revokeAccess();
		await GoogleSignin.signOut();
	} catch (err) {
		console.log(err);
	}
};

const SettingsScreen = (props) => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.Auth.userInfo);

	const googleLogOutHandler = async () => {
		await logOut();
		dispatch(googleLogOut());
	};

	return (
		<View style={styles.screen}>
			<View>
				<Text>Logged in As {userInfo.user.email}</Text>
			</View>
			<ScrollView style={styles.test}>
				<List.Section style={styles.listSection}>
					<List.Subheader>Transactions</List.Subheader>
					<Divider />
					<TouchableListItem
						title="Recurring Transactions"
						onPress={() => console.log("hi")}
					/>
					<TouchableListItem
						title="Recurring Transactions"
						onPress={() => console.log("hi")}
					/>
					<TouchableListItem
						title="Recurring Transactions"
						onPress={() => console.log("hi")}
					/>
					<TouchableListItem
						title="Recurring Transactions"
						onPress={() => console.log("hi")}
					/>
				</List.Section>
				<List.Section style={styles.listSection}>
					<List.Subheader>Settings</List.Subheader>
					<Divider />
					<TouchableListItem
						title="Theme"
						onPress={() => console.log("hi")}
					/>
					<TouchableListItem
						title="Main Currency"
						onPress={() => console.log("hi")}
					/>
					<TouchableListItem
						title="Sub Currency"
						onPress={() => console.log("hi")}
					/>
					<TouchableListItem
						title="logOut"
						onPress={googleLogOutHandler}
					/>
					<TouchableListItem
						title="Theme"
						onPress={() => console.log("hi")}
					/>
				</List.Section>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	test: {
		// backgroundColor: 'blue'
	},
	listSection: {
		// backgroundColor: "blue",
	},
});

export default SettingsScreen;
