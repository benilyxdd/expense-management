import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { List, Divider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import TouchableListItem from "../../components/TouchableListItem";
import { logOut } from "../../store/actions/Auth";

const SettingsScreen = (props) => {
	const dispatch = useDispatch();
	const uid = useSelector((state) => state.Auth.uid);

	return (
		<View style={styles.screen}>
			<View>
				<Text>Logged in As {uid}</Text>
			</View>
			<ScrollView style={styles.test}>
				<List.Section style={styles.listSection}>
					<List.Subheader>Transactions</List.Subheader>
					<Divider />
					<TouchableListItem
						title="Recurring Transactions"
						onPress={() =>
							props.navigation.navigate("Recurring Transactions")
						}
					/>
					<TouchableListItem
						title="Categories"
						onPress={() => props.navigation.navigate("Categories")}
					/>
				</List.Section>
				<List.Section style={styles.listSection}>
					<List.Subheader>Settings</List.Subheader>
					<Divider />
					<TouchableListItem
						title="Theme"
						onPress={() => props.navigation.navigate("Theme")}
					/>
					<TouchableListItem
						title="Main Currency"
						onPress={() =>
							props.navigation.navigate("Main Currency")
						}
					/>
					<TouchableListItem
						title="Sub Currency"
						onPress={() =>
							props.navigation.navigate("Sub Currency")
						}
					/>
					<TouchableListItem
						title="Log out"
						onPress={() => dispatch(logOut())}
					/>
				</List.Section>
				<List.Section style={styles.listSection}>
					<List.Subheader>Support</List.Subheader>
					<Divider />
					<TouchableListItem
						title="Provide Feedback"
						onPress={() => props.navigation.navigate("Submit Feedback")}
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
