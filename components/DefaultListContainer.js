import React from "react";
import { List } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";

const DefaultListContainer = (props) => {
	return (
		<List.Section style={styles.listContainer}>
			<ScrollView>
				{props.data.map((transaction, index) => {
					return (
						<List.Item
							key={index}
							title={transaction.title}
							description={transaction.description}
							style={styles.listItem}
						/>
					);
				})}
			</ScrollView>
		</List.Section>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		marginVertical: "-2%",
	},
	listItem: {
		marginHorizontal: "5%",
		marginVertical: "2%",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "black",
	},
});

export default DefaultListContainer;
