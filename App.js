import React from "react";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MainScreen from "./screens/MainScreen";
import AccountOverall from "./store/reducers/AccountOverall";
import Home from "./store/reducers/Home";
import Settings from "./store/reducers/Settings";

enableScreens();

const rootReducer = combineReducers({
	accountOverallScreen: AccountOverall,
	HomeScreen: Home,
	SettingsScreen: Settings,
});
const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<MainScreen />
		</Provider>
	);
}
