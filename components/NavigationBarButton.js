import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "react-native-paper";

const NavigationBarButton = (props) => {
	return (
		<View style={styles.navigationBarButtonContainer}>
			<IconButton icon={props.icon} onPress={props.onPress} />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{props.title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    navigationBarButtonContainer: {
        marginStart: '5%',
        marginEnd: '5%',
        marginHorizontal: '5%',
    },
	title: {
		textAlign: "center",
	},
});

export default NavigationBarButton;
