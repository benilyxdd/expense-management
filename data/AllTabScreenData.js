import HomeScreen from "../screens/TabScreen/HomeScreen";
import AccountOverallScreen from "../screens/TabScreen/AccountOverallScreen";
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
		name: "Accounts",
		component: AccountOverallScreen,
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
