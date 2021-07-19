import React from "react";
import { View, StyleSheet } from "react-native";

import { VictoryPie, VictoryTheme } from "victory-native";

const Pie = (props) => {
	return (
		<View stlye={styles.pie}>
			<VictoryPie
				data={props.data}
				innerRadius={90}
				theme={VictoryTheme.material}
				width={400}
				radius={150}
				style={{
					labels: {
						fontSize: 15,
					},
				}}
				labelRadius={100}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Pie;
