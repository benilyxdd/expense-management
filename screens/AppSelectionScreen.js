import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import CustomContainer from "../components/CustomContainer";
import HeaderText from "../components/HeaderText";
import AppButton from "../components/AppButton";

const AppSelectionScreen = (props) => {
	return (
		<View style={styles.main}>
			<HeaderText
				title="Select Your App"
				containerStyle={styles.textContainer}
			/>
			<CustomContainer style={styles.appContainer}>
				<AppButton title="test">
					<Image
						source={require("../assets/images/money.png")}
						style={styles.image}
					/>
				</AppButton>
			</CustomContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		alignItems: "center",
		justifyContent: "center",
		width: "85%",
		height: "90%",
	},
	appContainer: {
		flex: 10,
		flexDirection: "row",
		flexWrap: "wrap",
		marginHorizontal: 15,
	},
	textContainer: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		resizeMode: "contain",
		flex: 1,
		width: "100%",
		height: "100%",
	},
});

export default AppSelectionScreen;
