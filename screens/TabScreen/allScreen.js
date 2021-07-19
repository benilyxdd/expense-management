import HomeScreen from "./HomeScreen";
import ExpenseScreen from "./ExpenseScreen";
import SettingScreen from "./SettingScreen";

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
