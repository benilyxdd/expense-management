import React from "react";
import { List } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const TouchableListItem = (props) => {
	return(
		<TouchableOpacity onPress={props.onPress}>
			<List.Item title={props.title} />
		</TouchableOpacity>
	);
};

export default TouchableListItem;
