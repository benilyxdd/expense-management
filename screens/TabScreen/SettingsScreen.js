import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import TouchableListItem from "../../components/TouchableListItem";
import SettingsData from "../../data/SettingsData";

const SettingScreen = (props) => {
	return (
		<View style={styles.screen}>
			<ScrollView style={styles.test}>
				{SettingsData.map((group, index) => {
					return (
						<List.Section style={styles.listSection} key={index}>
							<List.Subheader>{group.groupName}</List.Subheader>
							<Divider />
							{group.children.map((child, index) => {
								return (
									<TouchableListItem
										title={child.name}
										onPress={child.onPress}
										key={index}
									/>
								);
							})}
						</List.Section>
					);
				})}
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

export default SettingScreen;
