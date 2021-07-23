import {
	GoogleSignin,
	statusCodes,
} from "@react-native-google-signin/google-signin";
import { GOOGLE_LOGIN, SIGNUP, SIMPLE_LOGIN } from "../actions/Auth";

GoogleSignin.configure();

const initialState = {
	isLoggedIn: false,
	userInfo: {},
};

logIn = async () => {
	try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		return { isLoggedIn: true, userInfo: userInfo };
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			console.log("sign in cancelled");
		} else if (error.code === statusCodes.IN_PROGRESS) {
			console.log("it is already in process");
		} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			console.log("play service not available");
		} else {
			console.log("can't");
		}
	}
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_LOGIN:
			return { ...state, isLoggedIn: true };
		case GOOGLE_LOGIN:
			const newState = logIn();
			return { ...state, isLoggedIn: true };
		default:
			return state;
	}
};

export default AuthReducer;
