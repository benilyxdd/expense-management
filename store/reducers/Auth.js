import { GOOGLE_LOGIN, SIGNUP, SIMPLE_LOGIN } from "../actions/Auth";

const initialState = {
	isLoggedIn: false,
	userInfo: {},
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_LOGIN:
			return { ...state, isLoggedIn: true };
		case GOOGLE_LOGIN:
			return { ...state, userInfo: action.user, isLoggedIn: true };
		default:
			return state;
	}
};

export default AuthReducer;
