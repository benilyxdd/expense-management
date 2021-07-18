import React from "react";
import { View, StyleSheet } from "react-native";

const Container = (props) => {
	return (
		<View style={{ ...styles.container, ...props.style }}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
});

export default Container;
