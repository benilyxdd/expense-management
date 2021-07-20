import React from "react";
import { DataTable } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";

const DataTableRow = (props) => {
	return (
		<View style={styles.tableContainer}>
			{props.cells.map((cell, index) => {
				return (
					<View key={index}>
						<Text style={styles.tableText}>{cell.name}</Text>
						<Text style={styles.tableText}>{cell.amounts}</Text>
					</View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	tableContainer: {
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	tableText: {
		textAlign: "center",
	},
});

export default DataTableRow;
