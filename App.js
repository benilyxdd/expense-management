import React from "react";
import { enableScreens } from "react-native-screens";

import MainScreen from "./screens/MainScreen";

enableScreens();

export default function App() {
	return <MainScreen />;
}
