import React from "react";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import MainScreen from "./screens/MainScreen";
import Auth from "./store/reducers/Auth";
import AppData from "./store/reducers/AppData";
import Category from "./store/reducers/Category";
import Feedback from "./store/reducers/Feedback";
import Transactions from "./store/reducers/Transactions";

enableScreens();

const rootReducer = combineReducers({
	Auth: Auth,
	AppData: AppData,
	Category: Category,
	Feedback: Feedback,
	Transactions: Transactions,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<MainScreen />
		</Provider>
	);
}
