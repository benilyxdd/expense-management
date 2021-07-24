import {
	SIMPLE_LOGIN,
	GOOGLE_LOGIN,
	GOOGLE_LOGOUT,
	SIGNUP,
} from "../actions/Auth";

const initialState = {
	isLoggedIn: false,
	userInfo: {},
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_LOGIN:
			return { ...state, isLoggedIn: true };
		case GOOGLE_LOGIN:
			return { ...state, isLoggedIn: true, userInfo: action.user };
		case GOOGLE_LOGOUT:
			return { ...state, isLoggedIn: false, userInfo: {} };
		default:
			return state;
	}
};

export default AuthReducer;
