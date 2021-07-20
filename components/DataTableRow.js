import React from "react";
import { DataTable } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const DataTableRow = (props) => {
	return (
		<View style={styles.tableContainer}>
			<DataTable.Row style={{ ...styles.row, ...props.rowStyle }}>
				{props.cells.map((cell, index) => {
					return (
						<DataTable.Cell key={index} style={styles.cell}>
							{cell}
						</DataTable.Cell>
					);
				})}
			</DataTable.Row>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		borderBottomWidth: 0,
	},
	cell: {
		alignItems: "center",
		justifyContent: "center",
	},
});

export default DataTableRow;
