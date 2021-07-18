import React, {useState} from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

import AppSelectionScreen from "./screens/AppSelectionScreen";

const fetchFonts = () => {
	Font.loadAsync({
		caveat: require('./assets/fonts/Caveat-Regular.ttf'),
		'caveat-bold': require('./assets/fonts/Caveat-Bold.ttf')
	})
}

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<AppSelectionScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
