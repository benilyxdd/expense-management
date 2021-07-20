import HomeScreenNavigator from "../navigation/HomeScreenNavigator";
import AccountOverallScreenNavigator from "../navigation/AccountOverallScreenNavigator";
import SettingScreenNavigator from "../navigation/SettingScreenNavigator";

const allScreen = [
	{
		name: "Home",
		component: HomeScreenNavigator,
		icon: {
			name: "home",
		},
	},
	{
		name: "Accounts",
		component: AccountOverallScreenNavigator,
		icon: {
			name: "share",
		},
	},
	{
		name: "Settings",
		component: SettingScreenNavigator,
		icon: {
			name: "cog",
		},
	},
];

export default allScreen;
