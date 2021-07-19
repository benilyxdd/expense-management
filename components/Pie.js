import React from "react";

import { VictoryPie, VictoryTheme } from "victory-native";

const Pie = (props) => {
	return (
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
	);
};

export default Pie;
