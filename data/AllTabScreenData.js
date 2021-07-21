import HomeScreenNavigator from "../navigation/HomeScreenNavigator";
import AccountOverallScreenNavigator from "../navigation/AccountOverallScreenNavigator";
import SettingsScreenNavigator from "../navigation/SettingsScreenNavigator";

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
		component: SettingsScreenNavigator,
		icon: {
			name: "cog",
		},
	},
];

export default allScreen;
