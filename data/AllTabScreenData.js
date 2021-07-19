import HomeScreen from "../screens/TabScreen/HomeScreen";
import ExpenseScreen from "../screens/TabScreen/ExpenseScreen";
import SettingScreen from "../screens/TabScreen/SettingScreen";

const allScreen = [
	{
		name: "Home",
		component: HomeScreen,
		icon: {
			name: "home",
		},
	},
	{
		name: "Expense",
		component: ExpenseScreen,
		icon: {
			name: "share",
		},
	},
	{
		name: "Settings",
		component: SettingScreen,
		icon: {
			name: "cog",
		},
	},
];

export default allScreen;
