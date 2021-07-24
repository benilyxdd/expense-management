import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { List, Divider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import TouchableListItem from "../../components/TouchableListItem";

const SettingsScreen = (props) => {
	const dispatch = useDispatch();
	const userEmail = useSelector((state) => state.Auth.userEmail);

	return (
		<View style={styles.screen}>
			<View>
				<Text>Logged in As {userEmail}</Text>
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
						onPress={() => console.log("hi")}
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
