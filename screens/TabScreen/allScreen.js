import HomeScreen from "./HomeScreen";
import Try2 from "./try2";
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
		name: "try2",
		component: Try2,
		icon: {
			name: "rocket",
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
